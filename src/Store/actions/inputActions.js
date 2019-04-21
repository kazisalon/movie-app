import { fetchMovies } from './fetchingActions';
import { changeGenreValue } from './genreActions';
import { toggleRating, togglePopularity } from './filterActions';
import { resetPageNumber } from './paginationActions';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';

export const changeInputValue = (inputValue = '') => ({
  type: CHANGE_INPUT_VALUE,
  payload: { inputValue },
});

export const resetInputValue = () => ({
  type: RESET_INPUT_VALUE,
});

export function fetchMovieByInput(inputValue) {
  return (dispatch, getState) => {
    dispatch(changeInputValue(inputValue));
    const value = getState().inputReducers.inputValue;
    dispatch(fetchMovies(value));
    dispatch(resetPageNumber());
    // eslint-disable-next-line prefer-destructuring
    const byPopularity = getState().filterReducers.byPopularity;
    // eslint-disable-next-line prefer-destructuring
    const byRating = getState().filterReducers.byRating;
    if (byPopularity) dispatch(togglePopularity());
    if (byRating) dispatch(toggleRating());
    const clearValue = { value: 0, label: 'Genre' };
    dispatch(changeGenreValue(clearValue));
  };
}
