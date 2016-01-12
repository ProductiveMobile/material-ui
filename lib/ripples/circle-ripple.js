'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var StylePropable = require('../mixins/style-propable');
var Transitions = require('../styles/transitions');
var Colors = require('../styles/colors');

var CircleRipple = React.createClass({
  displayName: 'CircleRipple',

  mixins: [StylePropable],

  propTypes: {
    color: React.PropTypes.string,
    opacity: React.PropTypes.number,
    started: React.PropTypes.bool,
    ending: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      color: Colors.darkBlack
    };
  },

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var started = _props.started;
    var ending = _props.ending;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['color', 'started', 'ending', 'style']);

    var styles = this.mergeAndPrefix({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      opacity: this.props.ending ? 0 : this.props.opacity ? this.props.opacity : 0.16,
      borderRadius: '50%',
      transform: this.props.started ? 'scale(1)' : 'scale(0)',
      backgroundColor: this.props.color,
      transition: Transitions.easeOut('2s', 'opacity') + ',' + Transitions.easeOut('1s', 'transform')
    }, this.props.style);

    return React.createElement('div', _extends({}, other, { style: styles }));
  }

});

module.exports = CircleRipple;