import React from 'react';

export default class MoviesHistoryList extends React.Component {
  render() {
    let { movies } = this.props;
    movies = movies.map(m => (m.isWatched ? m.title : ''));
    return (
      <section id="history">
        <h2>Movies I have already watched</h2>
        <div style={{color: "white"}}>{movies}</div>
        <ul id="historyList" class="list"></ul>
      </section>
    );
  }
}

