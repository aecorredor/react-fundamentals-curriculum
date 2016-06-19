var React = require('react');
var PropTypes = React.PropTypes;
var DayItem = require('./DayItem');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px auto'
  },
  header: {
    fontSize: 45,
    color: 'black',
    paddingTop: '5%',
    fontWeight: 100,
    margin: 0,
    textAlign: 'center'
  },
  subcontainer: {
    fontSize: 25,
    color: 'black',
    fontWeight: 100,
    textAlign: 'center'
  }
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function CityDetail(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{capitalize(props.city + ', ' + props.cityDetail.country)}</h1>
      <DayItem
              key={props.cityDetail.date}
              date={props.cityDetail.date}
              icon={props.cityDetail.icon} />
      <div style={styles.subcontainer}>
        <p>{capitalize(props.cityDetail.weather)}</p>
        <p>{'Minimum Temperature: ' + props.cityDetail.minTemp + ' °F'}</p>
        <p>{'Maximum Temperature: ' + props.cityDetail.maxTemp + ' °F'}</p>
        <p>{'Humidity: ' + props.cityDetail.humidity}</p>
      </div>
    </div>
  );
}

CityDetail.propTypes = {
  city: PropTypes.string.isRequired,
  cityDetail: PropTypes.object.isRequired
};

module.exports = CityDetail;
