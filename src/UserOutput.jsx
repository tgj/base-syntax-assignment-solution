import React from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';

const UserOutput = (props) => {
  const {
    username,
    occupation,
  } = props;

  return (
    <Well>
      <p>{username}</p>
      <p>{occupation}</p>
    </Well>
  )
};

UserOutput.propTypes = {
  username: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
}

export default UserOutput;