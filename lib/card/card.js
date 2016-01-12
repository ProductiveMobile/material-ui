'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var Paper = require('../paper');
var StylePropable = require('../mixins/style-propable');
var CardExpandable = require('./card-expandable');

var Card = React.createClass({
  displayName: 'Card',

  mixins: [StylePropable],

  getInitialState: function getInitialState() {
    return { expanded: this.props.initiallyExpanded ? true : false };
  },

  propTypes: {
    style: React.PropTypes.object,
    expandable: React.PropTypes.bool,
    initiallyExpanded: React.PropTypes.bool,
    onExpandChange: React.PropTypes.func
  },

  _onExpandable: function _onExpandable(value) {
    this.setState({ expanded: value });
    if (this.props.onExpandChange) this.props.onExpandChange(value);
  },

  render: function render() {
    var _this = this;

    var lastElement = undefined;
    var newChildren = React.Children.map(this.props.children, function (currentChild) {
      if (!currentChild) {
        return null;
      }
      if (_this.state.expanded === false && currentChild.props.expandable === true) return;
      if (currentChild.props.showExpandableButton === true) {
        lastElement = React.cloneElement(currentChild, {}, currentChild.props.children, React.createElement(CardExpandable, { expanded: _this.state.expanded, onExpanding: _this._onExpandable }));
      } else {
        lastElement = currentChild;
      }
      return lastElement;
    }, this);

    // If the last element is text or a title we should add
    // 8px padding to the bottom of the card
    var addBottomPadding = lastElement && (lastElement.type.displayName === "CardText" || lastElement.type.displayName === "CardTitle");
    var _props = this.props;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['style']);

    var mergedStyles = this.mergeAndPrefix({
      overflow: 'hidden',
      zIndex: 1
    }, style);

    return React.createElement(
      Paper,
      _extends({}, other, { style: mergedStyles }),
      React.createElement(
        'div',
        { style: { paddingBottom: addBottomPadding ? 8 : 0 } },
        newChildren
      )
    );
  }
});

module.exports = Card;