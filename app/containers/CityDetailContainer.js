var React = require('react');
var CityDetail = require('../components/CityDetail');

function CityDetailContainer(props) {
  return (
    <CityDetail
      city={props.routeParams.city}
      cityDetail={props.location.state.dayDetail}/>
  );
}

module.exports = CityDetailContainer;
