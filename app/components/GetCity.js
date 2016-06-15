React = require('react');

function GetCity(props) {
  return (
    <div>
    <form>
      <div className="form-group">
        <input
          className='form-control'
          placeholder='Github Username'
          type='text'
        />
      </div>
      <button
        className="btn btn-success center-block"
        type="submit"
        >
          Continue
      </button>
    </form>
    </div>
  );
}

module.exports = GetCity;
