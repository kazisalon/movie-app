import { fetchMovies } from './fetchingActions';
import { resetPageNumber, resetInputValue } from './inputActions';
import { toggleRating, togglePopularity } from './filterActions';

export const CHANGE_GENRE_VALUE = 'CHANGE_GENRE_VALUE';

export const changeGenreValue = (value = { value: 0, label: 'Genre' }) => ({
  type: CHANGE_GENRE_VALUE,
  payload: value,
});

export function fetchMovieByGenre(value) {
  return (dispatch, getState) => {
    dispatch(changeGenreValue(value));
    const byPopularity = getState().filterReducers.byPopularity;
    const byRating = getState().filterReducers.byRating;
    const genreStateId = getState().genreReducers.value;
    if (byPopularity) dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    dispatch(fetchMovies(null, null, genreStateId));
    console.log(genreStateId);
    dispatch(resetPageNumber());
    dispatch(resetInputValue());
  };
}
