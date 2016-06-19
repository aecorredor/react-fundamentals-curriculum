var React = require('react');
var PropTypes = React.PropTypes;
var DayItem = require('./DayItem');
var Loading = require('./Loading');

var styles = {
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '50px auto',
    maxWidth: 1200
  },
  header: {
    fontSize: 45,
    color: 'black',
    paddingTop: '5%',
    fontWeight: 100,
    margin: 0,
    textAlign: 'center'
  },
  subheader: {
    fontWeight: 100,
    fontSize: 25,
    padding: '2%',
    margin: 0,
    textAlign: 'center'
  }
};

function ForecastContainer(props) {
  return (
    <div styles={{textAlign: 'center'}}>
      <h1 style={styles.header}>{props.city + ', ' + props.country}</h1>
      <h2 style={styles.subheader}>Click on a day for details</h2>
      <div style={styles.forecastContainer}>
        {props.forecast.days.map(function(day) {
          return <DayItem
                  key={day.date}
                  date={day.date}
                  icon={day.icon}
                  cursor='pointer'
                  // bind here just send the current day item as the parameter
                  // of the onGetCityDetail to be used in the actual item
                  onGetCityDetail={props.onGetCityDetail.bind(null, day)} />;
        })}
      </div>
    </div>

  );
}

function ShowCity(props) {
  return props.isLoading
    ? <Loading speed={150}/>
    : <ForecastContainer
        city={props.forecast.city}
        country={props.forecast.country}
        forecast={props.forecast}
        onGetCityDetail={props.onGetCityDetail}/>;
}

ShowCity.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired,
  onGetCityDetail: PropTypes.func.isRequired
};

module.exports = ShowCity;
