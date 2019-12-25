import React from 'react';
import './DeleteBtn.css';
import PropTypes from 'prop-types';

export default function DeleteBtn({ onDelete }) {
  const handleDelete = e => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <span onClick={handleDelete} className="deleteBtn">
      X
    </span>
  );
}

DeleteBtn.propTypes = {
  onDelete: PropTypes.func.isRequired
};
