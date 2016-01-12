'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react/addons');
var PropTypes = require('../utils/prop-types');
var StylePropable = require('../mixins/style-propable');
var Typography = require('../styles/typography');
var Paper = require('../paper');

var List = React.createClass({
  displayName: 'List',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    insetSubheader: React.PropTypes.bool,
    subheader: React.PropTypes.string,
    subheaderStyle: React.PropTypes.object,
    zDepth: PropTypes.zDepth
  },

  getDefaultProps: function getDefaultProps() {
    return {
      zDepth: 0
    };
  },

  render: function render() {
    var _props = this.props;
    var insetSubheader = _props.insetSubheader;
    var style = _props.style;
    var subheader = _props.subheader;
    var subheaderStyle = _props.subheaderStyle;
    var zDepth = _props.zDepth;

    var other = _objectWithoutProperties(_props, ['insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);

    var styles = {
      root: {
        padding: 0,
        paddingBottom: 8,
        paddingTop: subheader ? 0 : 8
      },

      subheader: {
        color: Typography.textLightBlack,
        fontSize: 14,
        fontWeight: Typography.fontWeightMedium,
        lineHeight: '48px',
        paddingLeft: insetSubheader ? 72 : 16
      }
    };

    var mergedRootStyles = this.mergeStyles(styles.root, style);
    var mergedSubheaderStyles = this.mergeAndPrefix(styles.subheader, subheaderStyle);

    var subheaderElement = subheader ? React.createElement(
      'div',
      { style: mergedSubheaderStyles },
      subheader
    ) : null;

    return React.createElement(
      Paper,
      _extends({}, other, {
        style: mergedRootStyles,
        zDepth: zDepth }),
      subheaderElement,
      this.props.children
    );
  }
});

module.exports = List;