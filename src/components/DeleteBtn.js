import React from 'react';
import './DeleteBtn.css';
import PropTypes from 'prop-types';

const DeleteBtn = ({ id }) => {
  return (
    <span id={id} className="deleteBtn">
      X
    </span>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired
};

export default DeleteBtn;
