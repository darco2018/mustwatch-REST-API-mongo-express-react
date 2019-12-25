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
  // -------------------------------

  handleInputChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  // arrow function lets 'this' to get inside the function
  handleIsWatched = id => {
    console.log('is Watched: ' + id);
    let movies = this.state.movies.map(movie =>
      movie._id === id
        ? Object.assign({}, movie, { isWatched: !movie.isWatched })
        : movie
    );
    this.setState({
      movies
    });
  };

  handleNewMovie = e => {
    var enterPressed = (e.which || e.keyCode || 0) === 13 ? true : false;

    if (enterPressed) {
      try {
        let title = this.state.inputVal;
        let newMovie = createMovie(title);
        this.setState({
          movies: [newMovie, ...this.state.movies],
          inputVal: ''
        });
        /*  const movieTitle = titleInput.value;
        const newMovie = { title: movieTitle };
        titleInput.value = ''; 
        const savedMovie = await postMovie(fullUrl, newMovie);
        futureList.appendChild(createMovieItem(savedMovie));
       */ //
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
            handleNewMovie={this.handleNewMovie}
            inputVal={this.state.inputVal}
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

function createMovie(
  title = '',
  _id = Math.floor(Math.random() * Math.floor(10000)).toString(),
  released = 0,
  genre = '',
  rating = 0,
  isWatched = false
) {
  return { _id, title, released, genre, rating, isWatched };
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
