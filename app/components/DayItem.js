var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props) {
  var styles = {
    item: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 25,
      cursor: props.cursor || 'auto'
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
  return styles;
}

function DayItem(props) {
  return (
    <div style={getStyles(props).item} onClick={props.onGetCityDetail}>
      <img src={'app/images/weather-icons/' + (props.icon) + '.svg'} style={getStyles(props).img} alt='Weather'/>
      <h2 style={getStyles(props).date}>{props.date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onGetCityDetail: PropTypes.func,
  cursor: PropTypes.string
};

module.exports = DayItem;
