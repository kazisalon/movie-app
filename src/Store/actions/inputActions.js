import { fetchMovies } from './fetchingActions';

export const FETCH_MOVIES_ADD_INPUT_VALUE = 'FETCH_MOVIES_ADD_INPUT_VALUE';
export const RESET_PAGE_NUMBER = 'RESET_PAGE_NUMBER';

export const fetchMovieAddInputValue = (inputValue = '') => ({
  type: FETCH_MOVIES_ADD_INPUT_VALUE,
  payload: { inputValue },
});

export const resetPageNumber = () => ({
  type: RESET_PAGE_NUMBER,
  payload: 1,
});

export function fetchMovieByInput(inputValue) {
  return (dispatch, getState) => {
    dispatch(fetchMovieAddInputValue(inputValue));
    const value = getState().inputReducers.inputValue;
    dispatch(fetchMovies(value));
    dispatch(resetPageNumber());
  };
}
