var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.string
  },
  getDefaulProps: function() {
    return {
      direction: 'column'
    };
  },
  render: function() {
    return (
      <GetCity
        direction = {this.props.direction}/>
    );
  }
});

module.exports = GetCityContainer;
