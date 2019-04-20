import { fetchMovies } from './fetchingActions';
import { changeGenreValue } from './genreActions';

export const FETCH_MOVIES_ADD_INPUT_VALUE = 'FETCH_MOVIES_ADD_INPUT_VALUE';
export const RESET_PAGE_NUMBER = 'RESET_PAGE_NUMBER';
export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';

export const fetchMovieAddInputValue = (inputValue = '') => ({
  type: FETCH_MOVIES_ADD_INPUT_VALUE,
  payload: { inputValue },
});

export const resetPageNumber = () => ({
  type: RESET_PAGE_NUMBER,
  payload: 1,
});

export const resetInputValue = () => ({
  type: RESET_INPUT_VALUE,
});

export function fetchMovieByInput(inputValue) {
  return (dispatch, getState) => {
    dispatch(fetchMovieAddInputValue(inputValue));
    const value = getState().inputReducers.inputValue;
    dispatch(fetchMovies(value));
    dispatch(resetPageNumber());
    const clearValue = { value: 0, label: 'Genre' };
    dispatch(changeGenreValue(clearValue));
  };
}
