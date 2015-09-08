let React = require('react');
let Transitions = require('./styles/transitions');
let StylePropable = require('./mixins/style-propable');


let InkBar = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  propTypes: {
    color: React.PropTypes.string,
    left: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired,
    position: React.PropTypes.oneOf(['top', 'bottom']),
  },

  getDefaultProps() {
    return {
      position: 'top',
    };
  },

  mixins: [StylePropable],

  render() {
    let {
      color,
      left,
      width,
      style,
      position,
      ...other,
    } = this.props;

    let colorStyle = color ? {backgroundColor: color} : undefined;
    let positionStyle = position === 'top' ? {marginTop: '-2px'} : {marginBottom: '-2px'};
    let styles = this.mergeAndPrefix({
      left: left,
      width: width,
      bottom: 0,
      display: 'block',
      backgroundColor: this.context.muiTheme.component.inkBar.backgroundColor,
      height: 2,
      position: 'relative',
      transition: Transitions.easeOut('1s', 'left'),
    }, positionStyle, this.props.style, colorStyle);

    return (
      <div style={styles}>
        &nbsp;
      </div>
    );
  },

});

module.exports = InkBar;
