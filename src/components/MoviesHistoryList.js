import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import DeleteBtn from './DeleteBtn';
import './MovieList.css';

export default function MoviesHistoryList({ movies, onDelete, onWatched }) {
  const onClick = e => {
    console.log('Click!');

    const deleteBtnClicked = e.target.className.includes('deleteBtn');
    if (deleteBtnClicked) {
      e.stopPropagation();
      onDelete(e.target.id);
    } else {
      onWatched(e.target.id);
    }
  };

  return (
    <section id="future">
      <h2>&nbsp;&nbsp;Movies I have already watched</h2>
      <ul id="futureList" className="list">
        {movies.map((movie, i) =>
          movie.isWatched ? (
            <li key={movie._id} id={movie._id} onClick={onClick}>
              <MovieItem {...movie} />
              <DeleteBtn id={movie._id} onClick={onClick} />
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
}

MoviesHistoryList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onWatched: PropTypes.func.isRequired
};
