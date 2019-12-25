import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import DeleteBtn from './DeleteBtn';
import './MovieList.css';

export default function MoviesFutureList({ movies, onDelete, onWatched }) {
  const onClick = e => {
    const deleteBtnClicked = e.target.className.includes('deleteBtn');
    if (!deleteBtnClicked) {
      onWatched(e.target.id);
    }
  };

  return (
    <section id="future">
      <h2>Movies to watch in the future</h2>
      <ul id="futureList" className="list">
        {movies.map((movie, i) =>
          movie.isWatched ? null : (
            <li key={movie._id} id={movie._id} onClick={onClick}>
              <MovieItem {...movie} />
              <DeleteBtn onDelete={() => onDelete(movie._id)} />
            </li>
          )
        )}
      </ul>
    </section>
  );
}

MoviesFutureList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onWatched: PropTypes.func.isRequired
};
