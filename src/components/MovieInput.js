import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieInput.css';

export default class MovieInput extends Component {
  render() {
    const { inputVal, handleInputChange, handleNewMovie } = this.props;

    return (
      <section className="form">
        <input
          id="titleInput"
          type="text"
          placeholder="Add new movie you want to watch"
          value={inputVal}
          onChange={handleInputChange.bind(this)}
          onKeyDown={handleNewMovie.bind(this)}
        ></input>
      </section>
    );
  }
}

MovieInput.propTypes = {
  inputVal: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNewMovie: PropTypes.func.isRequired
};
