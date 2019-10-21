import * as types from '../helpers/types';

export const togglePopularity = () => ({
  type: types.TOGGLE_POPULARITY,
});

export const toggleRating = () => ({
  type: types.TOGGLE_RATING,
});

export const changeGenreValue = (value = 0) => ({
  type: types.CHANGE_GENRE_VALUE,
  payload: value,
});

export const changeInputValue = (inputValue = '') => ({
  type: types.CHANGE_INPUT_VALUE,
  payload: inputValue,
});

export const resetFilters = () => ({
  type: types.RESET_FILTERS,
});
