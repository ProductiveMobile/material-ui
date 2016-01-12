'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');

var CardActions = React.createClass({
  displayName: 'CardActions',

  getStyles: function getStyles() {
    return {
      root: {
        padding: 8,
        position: 'relative'
      }
    };
  },

  propTypes: {
    expandable: React.PropTypes.bool,
    showExpandableButton: React.PropTypes.bool
  },

  render: function render() {
    var styles = this.getStyles();

    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        style: { marginRight: 8 }
      });
    });

    return React.createElement(
      'div',
      _extends({}, this.props, { style: styles.root }),
      children
    );
  }
});

module.exports = CardActions;