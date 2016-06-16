React = require('react');
PropTypes = React.PropTypes;

function Button(props) {
  return (
    <button
      className="btn btn-success"
      style={{margin: 10}}
      type="submit"
    >
        {props.children}
    </button>
  );
}

function InputField(props) {
  return (
    <input
      className='form-control'
      placeholder='City, State'
      type='text'
    />
  );
}

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
      <InputField/>
      <Button>Get Weather</Button>
    </div>
  );
}

GetCity.propTypes = {
  direction: PropTypes.string
};

module.exports = GetCity;
