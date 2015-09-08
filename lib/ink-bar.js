'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var Transitions = require('./styles/transitions');
var StylePropable = require('./mixins/style-propable');

var InkBar = React.createClass({
  displayName: 'InkBar',

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    color: React.PropTypes.string,
    left: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired,
    position: React.PropTypes.oneOf(['top', 'bottom'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      position: 'top'
    };
  },

  mixins: [StylePropable],

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var left = _props.left;
    var width = _props.width;
    var style = _props.style;
    var position = _props.position;

    var other = _objectWithoutProperties(_props, ['color', 'left', 'width', 'style', 'position']);

    var colorStyle = color ? { backgroundColor: color } : undefined;
    var positionStyle = position === 'top' ? { marginTop: '-2px' } : { marginBottom: '-2px' };
    var styles = this.mergeAndPrefix({
      left: left,
      width: width,
      bottom: 0,
      display: 'block',
      backgroundColor: this.context.muiTheme.component.inkBar.backgroundColor,
      height: 2,
      position: 'relative',
      transition: Transitions.easeOut('1s', 'left')
    }, positionStyle, this.props.style, colorStyle);

    return React.createElement(
      'div',
      { style: styles },
      ' '
    );
  }

});

module.exports = InkBar;