var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetCityContainer = React.createClass({
  getDefaulProps: function() {
    return {
      direction: 'column'
    };
  },
  getInitialState: function() {
    return {
      city: ''
    };
  },
  handleUpdateCity: function(event) {
     this.setState({
       city: event.target.value
     });
  },
  handleSubmitCity: function(event) {
    openWeatherHelpers.getCurrentWeather(this.state.city)
      .then(function(result) {
        console.log(result);
      });
  },
  render: function() {
    return (
      <GetCity
        direction = {this.props.direction}
        city = {this.state.city}
        onUpdateCity = {this.handleUpdateCity}
        onSubmitCity = {this.handleSubmitCity}/>
    );
  }
});

GetCityContainer.propTypes = {
  direction: PropTypes.string
};

module.exports = GetCityContainer;
