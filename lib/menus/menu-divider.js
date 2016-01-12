'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react/addons');
var StylePropable = require('../mixins/style-propable');
var ListDivider = require('../lists/list-divider');

var MenuDivider = React.createClass({
  displayName: 'MenuDivider',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['style']);

    var mergedStyles = this.mergeAndPrefix({
      marginTop: 7,
      marginBottom: 8
    }, style);

    return React.createElement(ListDivider, _extends({}, other, { style: mergedStyles }));
  }
});

module.exports = MenuDivider;