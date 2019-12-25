import React from 'react';
import MovieItem from './MovieItem';
import DeleteBtn from './DeleteBtn';
import PropTypes from 'prop-types';
import './MovieList.css';

export default class MoviesHistoryList extends React.Component {
  render() {
    let { movies, onDelete } = this.props;

    return (
      <section id="future">
        <h2>Movies to watch in the future</h2>
        <ul id="futureList" className="list">
          {movies.map((movie, i) =>
            movie.isWatched ? (
              <li key={movie._id}>
                <MovieItem {...movie} />
                <DeleteBtn onDelete={() => onDelete(movie._id)} />
              </li>
            ) : null
          )}
        </ul>
      </section>
    );
  }
}

MoviesHistoryList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};
