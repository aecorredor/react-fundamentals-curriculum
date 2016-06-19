var React = require('react');
var ShowCity = require('../components/ShowCity');
var openWeatherHelpers = require('../utils/openWeatherHelpers');


var ShowCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleGetCityDetail: function(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        dayDetail: weather
      }
    });
  },
  render: function() {
    return (
      <ShowCity
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
        onGetCityDetail={this.handleGetCityDetail}/>
    );
  }
});

module.exports = ShowCityContainer;
