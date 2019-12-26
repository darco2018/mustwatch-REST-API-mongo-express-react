import React from 'react';
import './App.css';
import MoviesFutureList from './components/MoviesFutureList';
import MoviesHistoryList from './components/MoviesHistoryList';
import MovieInput from './components/MovieInput';
import './styles.css';
import * as apiCalls from './apiCalls';

// http://localhost:5000/api/movies
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMovieInput: '',
      movies: MOVIES
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  //----------------------------------

  loadMovies = async () => {
    const movies = await apiCalls.getMovies();
    if (movies) {
      this.setState({ movies });
    }
  };

  handleInputChange = e => {
    this.setState({ newMovieInput: e.target.value });
  };
  

  handleSubmitMovie = async e => {
    var enterPressed = (e.which || e.keyCode || 0) === 13 ? true : false;

    if (enterPressed) {
      let title = this.state.newMovieInput;
      let newMovie = await apiCalls.postMovie({ title });
      this.setState({
        movies: [newMovie, ...this.state.movies],
        newMovieInput: ''
      });
    }
  };

  // arrow function lets 'this' to get inside the function
  handleIsWatched = async id => {
    let movie = this.state.movies.find(movie => movie._id === id);
    let updatedMovie = await apiCalls.putMovie(id, {
      isWatched: !movie.isWatched
    });

    let movies = this.state.movies.map(movie =>
      movie._id === id ? Object.assign({}, updatedMovie) : movie
    );
    this.setState({ movies });
  };

  handleDelete = async id => {
    await apiCalls.deleteMovie(id);   
    const movies = this.state.movies.filter(movie => movie._id !== id);  //deep copy
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
            onInputChange={this.handleInputChange}
            onNewMovie={this.handleSubmitMovie}
            inputVal={this.state.newMovieInput}
          />
          <MoviesFutureList
            movies={this.state.movies}
            onDelete={this.handleDelete}
            onWatched={this.handleIsWatched}
          />
          <MoviesHistoryList
            movies={this.state.movies}
            onDelete={this.handleDelete}
            onWatched={this.handleIsWatched}
          />
        </main>
      </>
    );
  }
}

const MOVIES = [
  {
    _id: '1111',
    title: 'Heroes',
    genre: 'fantasy',
    released: 2008,
    isWatched: false,
    rating: 0
  },
  {
    _id: '2222',
    title: 'Blue Bell',
    genre: 'sci-fi',
    released: 1985,
    isWatched: true,
    rating: 0
  },
  {
    _id: '3333',
    title: 'What Love Is',
    genre: 'drama',
    released: 2017,
    isWatched: false,
    rating: 0
  }
];

export default App;

/* 
function createMovie(
  title = '',
  _id = Math.floor(Math.random() * Math.floor(10000)).toString(),
  released = 0,
  genre = '',
  rating = 0,
  isWatched = false
) {
  return { _id, title, released, genre, rating, isWatched };
} */

