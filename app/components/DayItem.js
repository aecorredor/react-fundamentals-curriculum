var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
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

// var styles = {
//   item: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 35
//   },
//   img: {
//     height: '130'
//   },
//   date: {
//     fontSize: 30,
//     color: '#333',
//     fontWeight: 100,
//   }
// };

function DayItem(props) {
  return (
    <div style={styles.item}>
      <img src={'app/images/weather-icons/' + (props.icon) + '.svg'} style={styles.img} alt='Weather'/>
      <h2 style={styles.date}>{props.date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

module.exports = DayItem;
