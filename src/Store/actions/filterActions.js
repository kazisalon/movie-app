import { fetchMovies } from './fetchingActions';
import { resetInputValue } from './inputActions';
import { resetPageNumber } from './paginationActions';

export const TOGGLE_POPULARITY = 'TOGGLE_POPULARITY';
export const TOGGLE_RATINGS = 'TOGGLE_RATINGS';

export const togglePopularity = () => ({
  type: TOGGLE_POPULARITY,
});

export const toggleRating = () => ({
  type: TOGGLE_RATINGS,
});

export function fetchMoviesByPopularity() {
  return (dispatch, getState) => {
    dispatch(togglePopularity());
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filterReducers.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filterReducers.byRating;
    const genreStateId = getState().genreReducers.value;
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies('', null, genreStateId, null, byPopularity));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}

export function fetchMoviesByRating() {
  return (dispatch, getState) => {
    dispatch(toggleRating());
    const genreStateId = getState().genreReducers.value;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filterReducers.byRating;
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filterReducers.byPopularity;
    if (byPopularity) dispatch(togglePopularity());
    dispatch(fetchMovies('', null, genreStateId, byRating));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}
