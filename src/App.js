import React from 'react';
import './App.css';
import MoviesFutureList from './components/MoviesFutureList';
import MoviesHistoryList from './components/MoviesHistoryList';
import MovieInput from './components/MovieInput';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      movies: MOVIES
    };
  }

  async postMovie(fullUrl, newMovie) {
    console.log('posting movie');
  }

  handleInputChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = e => {
    var key = e.which || e.keyCode || 0;

    if (key === 13) {
      console.log('key 13');
      try {
        /*  const movieTitle = titleInput.value;
        const newMovie = { title: movieTitle };
        titleInput.value = ''; 
        const savedMovie = await postMovie(fullUrl, newMovie);
        futureList.appendChild(createMovieItem(savedMovie));
       */
      } catch (error) {
        console.error(
          'There has been a problem with your fetch operation: ' + error.message
        );
      }
    }
  };

  handleDelete = id => {
    //deep copy
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  };

  render() {
    return (
      <>
        <header>
          <h1>
            Must<span>watch</span>
          </h1>
        </header>
        <main>
          <MovieInput
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            inputVal={this.state.inputVal}
          />
          <MoviesFutureList
            movies={this.state.movies}
            onDelete={this.handleDelete}
          />
          <MoviesHistoryList
            movies={this.state.movies}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

const MOVIES = [
  {
    _id: '1111',
    title: 'Superman',
    genre: 'fantasy',
    released: 2008,
    isWatched: false,
    rating: 0
  },
  {
    _id: '2222',
    title: 'Star Wars',
    genre: 'sci-fi',
    released: 1985,
    isWatched: true,
    rating: 0
  },
  {
    _id: '3333',
    title: 'Thieves',
    genre: 'drama',
    released: 2017,
    isWatched: false,
    rating: 0
  }
];

export default App;
