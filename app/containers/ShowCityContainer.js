var React = require('react');
var ShowCity = require('../components/ShowCity');
var openWeatherHelpers = require('../utils/openWeatherHelpers');


var ShowCityContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    };
  },
  makeRequest: function(city) {
    openWeatherHelpers.getFiveDayForecast(city)
      .then(function(result) {
        this.setState({
          isLoading: false,
          forecast: result
        });
        console.log(this.state.forecast);
      }.bind(this));
  },
  // called after initial render
  componentDidMount: function() {
    this.makeRequest(this.props.routeParams.city);
  },
  // called if the component receives new props
  // in this case, when we use the getcity on the top right
  componentWillReceiveProps: function(nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  },
  render: function() {
    return (
      <ShowCity
        forecast={this.state.forecast}/>
    );
  }
});

module.exports = ShowCityContainer;
