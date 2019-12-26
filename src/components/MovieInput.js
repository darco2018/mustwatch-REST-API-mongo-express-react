import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieInput.css';

export default class MovieInput extends Component {
  render() {
    const { inputVal, onInputChange, onNewMovie } = this.props;

    return (
      <section className="form">
        <input
          id="titleInput"
          type="text"
          placeholder="Add new movie you want to watch"
          value={inputVal}
          onChange={onInputChange.bind(this)}
          onKeyDown={onNewMovie.bind(this)}
        ></input>
      </section>
    );
  }
}

MovieInput.propTypes = {
  inputVal: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onNewMovie: PropTypes.func.isRequired
};
