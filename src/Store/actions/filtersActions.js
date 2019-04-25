import { fetchMovies } from './fetchingActions';
import { resetPageNumber } from './paginationActions';

export const TOGGLE_POPULARITY = 'TOGGLE_POPULARITY';
export const TOGGLE_RATINGS = 'TOGGLE_RATINGS';

export const CHANGE_GENRE_VALUE = 'CHANGE_GENRE_VALUE';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';



export const togglePopularity = () => ({
  type: TOGGLE_POPULARITY,
});

export const toggleRating = () => ({
  type: TOGGLE_RATINGS,
});

export const changeGenreValue = (value = 0) => ({
  type: CHANGE_GENRE_VALUE,
  payload: value,
});

export const changeInputValue = (inputValue = '') => ({
  type: CHANGE_INPUT_VALUE,
  payload: { inputValue },
});

export const resetInputValue = () => ({
  type: RESET_INPUT_VALUE,
});



export function fetchMoviesByPopularity() {
  return (dispatch, getState) => {
    dispatch(togglePopularity());
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filters.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filters.byRating;
    const genreStateId = getState().filters.genreId;
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies('', null, genreStateId, null, byPopularity));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}

export function fetchMoviesByRating() {
  return (dispatch, getState) => {
    dispatch(toggleRating());
    const genreStateId = getState().filters.genreId;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filters.byRating;
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filters.byPopularity;
    if (byPopularity) dispatch(togglePopularity());
    dispatch(fetchMovies('', null, genreStateId, byRating));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}

export function fetchMovieByGenre(value) {
  return (dispatch, getState) => {
    dispatch(changeGenreValue(value));
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filters.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filters.byRating;
    const genreStateId = getState().filters.genreId;
    if (byPopularity) dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies(null, null, genreStateId));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}

export function fetchMovieByInput(inputValue) {
  return (dispatch, getState) => {
    dispatch(changeInputValue(inputValue));
    const value = getState().filters.inputValue;
    dispatch(fetchMovies(value));
    dispatch(resetPageNumber());
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filters.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filters.byRating;
    if (byPopularity) dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    const clearValue = { value: 0, label: 'Genre' };
    dispatch(changeGenreValue(clearValue));
  };
}
