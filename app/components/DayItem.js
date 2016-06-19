var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    cursor: 'pointer'
  },
  img: {
    paddingBottom: '15%',
    height: 100
  },
  date: {
    fontSize: 25,
    color: 'black',
    fontWeight: 100,
  }
};

function DayItem(props) {
  return (
    <div style={styles.item} onClick={props.onGetCityDetail}>
      <img src={'app/images/weather-icons/' + (props.icon) + '.svg'} style={styles.img} alt='Weather'/>
      <h2 style={styles.date}>{props.date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onGetCityDetail: PropTypes.func.isRequired,
};

module.exports = DayItem;
