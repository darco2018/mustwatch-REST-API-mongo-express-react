import React from 'react';
import PropTypes from 'prop-types';
import "./MovieItem.css"

function MovieItem({ _id, title, released, genre, rating,  }) {
  
  const movieInfo = createMovieItem(_id, title, released, genre, rating)
  return <strong>{movieInfo}</strong>;
}

MovieItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
};

function createMovieItem(id, title, released, genre, rating ) {
  
  /*  released in <span>${released}</span>,  <span>${genre}</span> */
  let listItem = 
    (<p className="movieItem">
      <strong>{title}</strong> 
    </p>);  
  return listItem;

   /* REMOVED FROM JS version
  document.createElement('LI');
  listItem.setAttribute('data-id', _id);
  listItem.innerHTML = 
  listItem.innerHTML += `<span class="deleteBtn">X</span>`; */
}

export default MovieItem;
