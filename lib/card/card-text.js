'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var Styles = require('../styles');
var StylePropable = require('../mixins/style-propable');

var CardText = React.createClass({
  displayName: 'CardText',

  mixins: [StylePropable],

  propTypes: {
    color: React.PropTypes.string,
    style: React.PropTypes.object,
    expandable: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      color: Styles.Colors.ck
    };
  },

  getStyles: function getStyles() {
    return {
      root: {
        padding: 16,
        fontSize: '14px',
        color: this.props.color
      }
    };
  },

  render: function render() {
    var styles = this.getStyles();
    var rootStyle = this.mergeAndPrefix(styles.root, this.props.style);

    return React.createElement(
      'div',
      _extends({}, this.props, { style: rootStyle }),
      this.props.children
    );
  }
});

module.exports = CardText;