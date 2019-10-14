import * as types from '../helpers/types';

export const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
});

export const fetchMoviesSuccess = movies => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = error => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchGenres = () => ({
  type: types.FETCH_GENRES,
});

export const fetchGenresSuccess = genres => ({
  type: types.FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const fetchGenresFailure = error => ({
  type: types.FETCH_GENRES_FAILURE,
  payload: error,
});

export const fetchMovieDetails = id => ({
  type: types.FETCH_MOVIE_DETAILS,
  payload: id,
});

export const fetchMovieDetailsSuccess = details => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: details,
});

export const fetchMovieDetailsFailure = error => ({
  type: types.FETCH_MOVIE_DETAILS_FAILURE,
  payload: error,
});

export const fetchNowPlayingMovies = () => ({
  type: types.FETCH_NOW_PLAYING_MOVIES,
});
