import React from 'react';
import MovieItem from './MovieItem';
import DeleteBtn from './DeleteBtn'
import PropTypes from 'prop-types';
import "./MovieList.css"

export default class MoviesFutureList extends React.Component {
  render() {
    let { movies, onDelete } = this.props;
    // change movie id

    return (
      <section id="future">
        <h2>Movies to watch in the future</h2>
        <ul style={{ color: 'white' }} id="futureList" className="list">
          {movies.map((m, i) =>
            m.isWatched ? (null) : (
              <li key={m._id}>
                <MovieItem _id={m._id} title={m.title} genre={m.genre} released={m.released} rating={m.rating} />
                <DeleteBtn  onDelete={() => onDelete(m._id)}/>
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
}



MoviesFutureList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
}