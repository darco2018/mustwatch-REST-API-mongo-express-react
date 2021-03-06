import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

function MovieItem({ _id, title, released, genre, rating }) {
  const movieInfo = createMovieItem(_id, title, genre, released, rating);
  return <strong>{movieInfo}</strong>;
}

MovieItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  released: PropTypes.number,
  rating: PropTypes.number
};

function createMovieItem(id, title, released, genre, rating) {
  /*  released in <span>${released}</span>,  <span>${genre}</span> */
  let listItem = (
    <p className="movieItem">
      <strong>{title}</strong>
    </p>
  );
  return listItem;
}

export default MovieItem;
