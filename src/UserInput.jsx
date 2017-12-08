import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const UserInput = (props) => {
  const {
    id,
    onChange,    
    username,
  } = props;

  return (
    <FormControl
      type="text"
      value={username}
      placeholder="Enter text"
      onChange={event => onChange(event, id)}
    />
  )
};

UserInput.propTypes = {
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,  
  username: PropTypes.string.isRequired,
}

export default UserInput;