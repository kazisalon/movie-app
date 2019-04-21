import { fetchMovies } from './fetchingActions';
import { resetInputValue } from './inputActions';
import { toggleRating, togglePopularity } from './filterActions';
import { resetPageNumber } from './paginationActions';

export const CHANGE_GENRE_VALUE = 'CHANGE_GENRE_VALUE';

export const changeGenreValue = (value = { value: 0, label: 'Genre' }) => ({
  type: CHANGE_GENRE_VALUE,
  payload: value,
});

export function fetchMovieByGenre(value) {
  return (dispatch, getState) => {
    dispatch(changeGenreValue(value));
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filterReducers.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filterReducers.byRating;
    const genreStateId = getState().genreReducers.value;
    if (byPopularity) dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies(null, null, genreStateId));
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}
