import axios from 'axios';
const APIURL = '/api/movies/';

export const getMovies = async () => {
  try {
    const response = await axios.get(APIURL);
    return response.data.movies;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ' + error.message
    );
  }
};

export const postMovie = async movie => {
  try {
    let res = await axios.post(APIURL, movie);
    return res.data;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ' + error.message
    );
  }
};

export const putMovie = async (id, movie) => {
  try {
    let res = await axios.put(APIURL + id, movie);
    return res.data;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ' + error.message
    );
  }
};

export const deleteMovie = async id => {
  try {
    await axios.delete(APIURL + id);
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ' + error.message
    );
  }
};
