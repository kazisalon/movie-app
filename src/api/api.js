/* eslint-disable no-return-await */
import axios from 'axios';

const MOVIEDB_API_KEY = process.env.REACT_APP_API_KEY;
const MOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';

const getMoviesByPopularity = async (genreId, currentPage) =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false
    &page=${currentPage || 1}${genreId ? `&with_genres=${genreId}` : ''}`,
  );

const getMoviesByRating = async (genreId, currentPage) =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/discover/movie?sort_by=vote_average.desc&api_key=${MOVIEDB_API_KEY}&region=US&page=${currentPage ||
      1}&vote_count.gte=500${genreId ? `&with_genres=${genreId}` : ''}`,
  );

const getMoviesByGenre = async (genreId, currentPage) =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage ||
      1}&with_genres=${genreId}`,
  );

const getMoviesByInput = async (inputValue, currentPage) =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/search/movie?api_key=${MOVIEDB_API_KEY}&query=${inputValue}&page=${currentPage ||
      1}`,
  );

const getNowPlayingMovies = async currentPage =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/movie/now_playing?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${currentPage ||
      1}`,
  );

const getGenres = async () =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/genre/movie/list?api_key=${MOVIEDB_API_KEY}&language=en-US`,
  );

const getMovieDetails = async id =>
  await axios.get(
    `${MOVIEDB_BASE_URL}/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`,
  );

export const api = {
  getMoviesByPopularity,
  getMoviesByRating,
  getMoviesByInput,
  getMoviesByGenre,
  getNowPlayingMovies,
  getGenres,
  getMovieDetails,
};
