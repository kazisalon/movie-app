import { fetchMovies } from './fetchingActions';
import { resetPageNumber, resetInputValue } from './inputActions';

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
    const byPopularity = getState().filterReducers.byPopularity;
    const genreStateId = getState().genreReducers.value;
    const byRating = getState().filterReducers.byRating;
    dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies('', null, genreStateId, null, byPopularity));
    console.log(byPopularity);
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}

export function fetchMoviesByRating() {
  return (dispatch, getState) => {
    dispatch(toggleRating());
    const genreStateId = getState().genreReducers.value;
    const byRating = getState().filterReducers.byRating;
    const byPopularity = getState().filterReducers.byPopularity;
    if (byPopularity) dispatch(togglePopularity());
    dispatch(fetchMovies('', null, genreStateId, byRating));
    console.log(byRating);
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}
