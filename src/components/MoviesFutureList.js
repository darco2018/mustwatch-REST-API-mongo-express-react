import React from 'react';

export default class MoviesFutureList extends React.Component {
  render() {
    let { movies } = this.props;
    movies = movies.map(m => m.isWatched ? "" :  m.title + ", ");
    return (
        <section id="future">
            <h2>Movies to watch in the future</h2>
            <div style={{color: "white"}}>{movies}</div>
            <ul id="futureList" class="list">
            </ul>
        </section>      
    );
  }
}


