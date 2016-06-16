React = require('react');
PropTypes = React.PropTypes;

// component for the button
function Button(props) {
  return (
    <button
      className="btn btn-success"
      style={{margin: 10}}
      type="button"
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  );
}

// component for the input field
function InputField(props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='City, State'
      type='text'
      value={props.city}
    />
  );
}

// this takes care of handling the style of the button depending on where
// it is used. If it's used on the header the flex direction will be row,
// meaning that the contents will be side by side; and if it's used on the
// main page body the flex type will be column, making the content stack on top
// of each other
function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  };
}

function GetCity(props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city}/>
      <Button
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  );
}

GetCity.propTypes = {
  direction: PropTypes.string,
  city: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired
};

module.exports = GetCity;
