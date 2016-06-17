var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
      event.preventDefault();
      if(!this.state.city) {
        // no city entered, do nothing
      } else {
        this.context.router.push('/forecast/' + this.state.city);
      }
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
