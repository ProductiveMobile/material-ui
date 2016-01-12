'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react/addons');
var StylePropable = require('../mixins/style-propable');

var ListDivider = React.createClass({
  displayName: 'ListDivider',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    inset: React.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var inset = _props.inset;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['inset', 'style']);

    var mergedStyles = this.mergeAndPrefix({
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: this.context.muiTheme.palette.borderColor
    }, style);

    return React.createElement('hr', _extends({}, other, { style: mergedStyles }));
  }
});

module.exports = ListDivider;