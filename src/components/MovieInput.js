import React, { Component } from 'react';

export default class MovieInput extends Component {
  render() {
    return (
      <section class="form">
        <input
          id="titleInput"
          type="text"
          placeholder="Add new movie you want to watch"
        ></input>
      </section>
    );
  }
}
