import React from 'react';
import './App.css';
import MoviesFutureList from './components/MoviesFutureList';
import MoviesHistoryList from './components/MoviesHistoryList';
import MovieInput from './components/MovieInput';
import './styles.css';

function App() {
  return (
    <>
      <header>
        <h1>
          Must<span>watch</span>
        </h1>
      </header>
      <main>
        <MovieInput />
        <MoviesFutureList movies={MOVIES} />
        <MoviesHistoryList movies={MOVIES} />
      </main>
    </>
  );
}

const MOVIES = [
  {
    title: 'Superman',
    genre: 'fantasy',
    released: 2008,
    isWatched: false,
    rating: 0
  },
  {
    title: 'Star Wars',
    genre: 'sci-fi',
    released: 1985,
    isWatched: true,
    rating: 0
  },
  {
    title: 'Thieves',
    genre: 'drama',
    released: 2017,
    isWatched: false,
    rating: 0
  }
];

export default App;
