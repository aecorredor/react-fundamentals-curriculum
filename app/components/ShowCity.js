var React = require('react');
var PropTypes = React.PropTypes;

function ShowCity(props) {
  return props.isLoading
    ? <div>Loading...</div>
    : <div>done loading</div>
}

ShowCity.propTypes = {
  forecast: PropTypes.object.isRequired
};

module.exports = ShowCity;
