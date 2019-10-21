import * as types from '../helpers/types';
import * as selectors from '../helpers/selectors';
import actions from '../actions';

import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { api } from '../api';

function* requestMovies(apiMethod, args = [], preventPageReset = false) {
  let response;
  try {
    yield put(actions.fetchMovies());
    response = yield call(apiMethod, ...args);
  } catch (e) {
    yield put(actions.fetchMoviesFailure('Failed to load!'));
    return;
  }
  const { results, total_pages: pageCount } = response.data;
  yield put(actions.fetchMoviesSuccess(results));
  yield put(actions.setPageCount(pageCount));
  const currentPage = yield select(selectors.currentPage);
  if (!preventPageReset && currentPage > 1) yield put(actions.resetPageNubmer());
}

function* fetchNowPlayingMovies() {
  yield requestMovies(api.getNowPlayingMovies);
}

function* fetchByInputChange({ payload: inputValue }) {
  if (inputValue) yield requestMovies(api.getMoviesByInput, [inputValue]);
}

function* fetchByTogglePopularity() {
  const genreId = yield select(selectors.genreId);
  const byPopularity = yield select(selectors.byPopularity);
  if (byPopularity) {
    yield requestMovies(api.getMoviesByPopularity, [genreId]);
  } else if (genreId) {
    yield requestMovies(api.getMoviesByGenre, [genreId]);
  } else {
    yield requestMovies(api.getNowPlayingMovies);
  }
}

function* fetchByToggleRating() {
  const genreId = yield select(selectors.genreId);
  const byRating = yield select(selectors.byRating);
  if (byRating) {
    yield requestMovies(api.getMoviesByRating, [genreId]);
  } else if (genreId) {
    yield requestMovies(api.getMoviesByGenre, [genreId]);
  } else {
    yield requestMovies(api.getNowPlayingMovies);
  }
}

function* fetchByGenreChange({ payload: genreId }) {
  if (genreId !== 0) {
    yield requestMovies(api.getMoviesByGenre, [genreId]);
  } else {
    yield requestMovies(api.getNowPlayingMovies);
  }
}

function* fetchByChangePage({ payload: nextPage }) {
  const filters = yield select(selectors.filters);
  const { byRating, byPopularity, genreId, inputValue } = filters;
  if (byPopularity) {
    yield requestMovies(api.getMoviesByPopularity, [genreId, nextPage], true);
  } else if (byRating) {
    yield requestMovies(api.getMoviesByRating, [genreId, nextPage], true);
  } else if (inputValue.length >= 1) {
    yield requestMovies(api.getMoviesByInput, [inputValue, nextPage], true);
  } else if (genreId) {
    yield requestMovies(api.getMoviesByGenre, [genreId, nextPage], true);
  } else {
    yield requestMovies(api.getNowPlayingMovies, [nextPage], true);
  }
}

function* fetchMovieDetails({ payload: id }) {
  let response;
  try {
    response = yield call(api.getMovieDetails, id);
  } catch (e) {
    yield put(actions.fetchMovieDetailsFailure('Failed to load!'));
    return;
  }
  const movieDetails = response.data;
  yield put(actions.fetchMovieDetailsSuccess(movieDetails));
}

export default function* watchFetchMovies() {
  yield all([
    takeLatest(types.CHANGE_INPUT_VALUE, fetchByInputChange),
    takeLatest(types.CHANGE_GENRE_VALUE, fetchByGenreChange),
    takeLatest(types.TOGGLE_POPULARITY, fetchByTogglePopularity),
    takeLatest(types.TOGGLE_RATING, fetchByToggleRating),
    takeLatest(types.CHANGE_PAGE, fetchByChangePage),
    takeLatest(types.RESET_FILTERS, fetchNowPlayingMovies),
    takeLatest(types.FETCH_NOW_PLAYING_MOVIES, fetchNowPlayingMovies),
    takeLatest(types.FETCH_MOVIE_DETAILS, fetchMovieDetails),
  ]);
}
