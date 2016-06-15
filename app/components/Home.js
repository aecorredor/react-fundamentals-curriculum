var React = require('react');
var styles = require('../styles');
var GetCityContainer = require('../containers/GetCityContainer');

function Home(props) {
  return (
    <div style={styles.patternBg}>
      <h1 style={styles.header}>Enter a City and State:</h1>
      <GetCityContainer />
    </div>
  );
}

module.exports = Home;
