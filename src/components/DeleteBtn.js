import React from 'react';
import './DeleteBtn.css';
import PropTypes from 'prop-types';

export default function DeleteBtn({ onDelete }) {
  return (
    <span onClick={onDelete} className="deleteBtn">
      X
    </span>
  );
}

DeleteBtn.propTypes = {
  onDelete: PropTypes.func.isRequired
};
