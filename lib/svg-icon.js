'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react/addons');
var StylePropable = require('./mixins/style-propable');
var Transitions = require('./styles/transitions');

var SvgIcon = React.createClass({
  displayName: 'SvgIcon',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    color: React.PropTypes.string,
    hoverColor: React.PropTypes.string,
    onMouseLeave: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    viewBox: React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      hovered: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      viewBox: '0 0 24 24'
    };
  },

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var hoverColor = _props.hoverColor;
    var viewBox = _props.viewBox;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'viewBox', 'style']);

    var offColor = color ? color : style && style.fill ? style.fill : this.context.muiTheme.palette.textColor;
    var onColor = hoverColor ? hoverColor : offColor;

    var mergedStyles = this.mergeAndPrefix({
      display: 'inline-block',
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: Transitions.easeOut()
    }, style, {
      // Make sure our fill color overrides fill provided in props.style
      fill: this.state.hovered ? onColor : offColor
    });

    return React.createElement(
      'svg',
      _extends({}, other, {
        onMouseLeave: this._handleMouseLeave,
        onMouseEnter: this._handleMouseEnter,
        style: mergedStyles,
        viewBox: viewBox }),
      this.props.children
    );
  },

  _handleMouseLeave: function _handleMouseLeave(e) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  },

  _handleMouseEnter: function _handleMouseEnter(e) {
    this.setState({ hovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }
});

module.exports = SvgIcon;