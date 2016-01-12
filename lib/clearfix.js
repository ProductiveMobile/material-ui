'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var BeforeAfterWrapper = require('./before-after-wrapper');

var ClearFix = React.createClass({
  displayName: 'ClearFix',

  render: function render() {
    var _props = this.props;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['style']);

    var before = function before() {
      return {
        content: "' '",
        display: 'table'
      };
    };

    var after = before();
    after.clear = 'both';

    return React.createElement(
      BeforeAfterWrapper,
      _extends({}, other, {
        beforeStyle: before(),
        afterStyle: after,
        style: this.props.style }),
      this.props.children
    );
  }
});

module.exports = ClearFix;