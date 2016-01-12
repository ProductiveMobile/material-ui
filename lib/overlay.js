'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var StylePropable = require('./mixins/style-propable');
var Transitions = require('./styles/transitions');
var Colors = require('./styles/colors');

var Overlay = React.createClass({
  displayName: 'Overlay',

  _originalBodyOverflow: '',

  mixins: [StylePropable],

  propTypes: {
    autoLockScrolling: React.PropTypes.bool,
    show: React.PropTypes.bool,
    transitionEnabled: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      autoLockScrolling: true,
      transitionEnabled: true
    };
  },

  componentDidMount: function componentDidMount() {
    this._originalBodyOverflow = document.getElementsByTagName('body')[0].style.oveflow;
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this.props.autoLockScrolling) this.props.show ? this._preventScrolling() : this._allowScrolling();
  },

  componentWillUnmount: function componentWillUnmount() {
    this._allowScrolling();
  },

  setOpacity: function setOpacity(opacity) {
    var overlay = React.findDOMNode(this);
    overlay.style.opacity = opacity;
  },

  getStyles: function getStyles() {
    var styles = {
      root: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 9,
        top: 0,
        left: '-100%',
        opacity: 0,
        backgroundColor: Colors.lightBlack,
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

        // Two ways to promote overlay to its own render layer
        willChange: 'opacity',
        transform: 'translateZ(0)',

        transition: this.props.transitionEnabled && Transitions.easeOut('0ms', 'left', '400ms') + ',' + Transitions.easeOut('400ms', 'opacity')
      },
      rootWhenShown: {
        left: '0',
        opacity: 1,
        transition: this.props.transitionEnabled && Transitions.easeOut('0ms', 'left') + ',' + Transitions.easeOut('400ms', 'opacity')
      }
    };
    return styles;
  },

  render: function render() {
    var _props = this.props;
    var show = _props.show;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['show', 'style']);

    var styles = this.mergeAndPrefix(this.getStyles().root, this.props.style, this.props.show && this.getStyles().rootWhenShown);

    return React.createElement('div', _extends({}, other, { style: styles }));
  },

  preventScrolling: function preventScrolling() {
    if (!this.props.autoLockScrolling) this._preventScrolling();
  },

  allowScrolling: function allowScrolling() {
    if (!this.props.autoLockScrolling) this._allowScrolling();
  },

  _preventScrolling: function _preventScrolling() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  },

  _allowScrolling: function _allowScrolling() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = this._originalBodyOverflow || '';
  }

});

module.exports = Overlay;