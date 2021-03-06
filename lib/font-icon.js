'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var StylePropable = require('./mixins/style-propable');
var Transitions = require('./styles/transitions');

var FontIcon = React.createClass({
  displayName: 'FontIcon',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    color: React.PropTypes.string,
    hoverColor: React.PropTypes.string,
    onMouseLeave: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      hovered: false
    };
  },

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var hoverColor = _props.hoverColor;
    var onMouseLeave = _props.onMouseLeave;
    var onMouseEnter = _props.onMouseEnter;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);

    var spacing = this.context.muiTheme.spacing;
    var offColor = color ? color : style && style.color ? style.color : this.context.muiTheme.palette.textColor;
    var onColor = hoverColor ? hoverColor : offColor;

    var mergedStyles = this.mergeAndPrefix({
      position: 'relative',
      fontSize: spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: Transitions.easeOut()
    }, style, {
      color: this.state.hovered ? onColor : offColor
    });

    return React.createElement('span', _extends({}, other, {
      onMouseLeave: this._handleMouseLeave,
      onMouseEnter: this._handleMouseEnter,
      style: mergedStyles }));
  },

  _handleMouseLeave: function _handleMouseLeave(e) {
    // hover is needed only when a hoverColor is defined
    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  },

  _handleMouseEnter: function _handleMouseEnter(e) {
    // hover is needed only when a hoverColor is defined
    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }
});

module.exports = FontIcon;