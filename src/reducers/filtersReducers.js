import * as types from '../helpers/types';

const filtersInitialState = {
  byPopularity: false,
  byRating: false,
  genreId: 0,
  inputValue: '',
};

export const filters = (state = filtersInitialState, action) => {
  switch (action.type) {
    case types.TOGGLE_POPULARITY:
      return {
        ...state,
        byPopularity: !state.byPopularity,
        byRating: false,
        inputValue: '',
      };
    case types.TOGGLE_RATING:
      return {
        ...state,
        byRating: !state.byRating,
        byPopularity: false,
        inputValue: '',
      };
    case types.CHANGE_GENRE_VALUE:
      return {
        ...state,
        genreId: action.payload,
        byRating: false,
        byPopularity: false,
        inputValue: '',
      };
    case types.CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
        genreId: 0,
        byRating: false,
        byPopularity: false,
      };
    case types.RESET_FILTERS:
      return {
        ...state,
        inputValue: '',
        genreId: 0,
        byRating: false,
        byPopularity: false,
      };
    default:
      return state;
  }
};

const genresInitialState = {
  items: [],
  loading: false,
  error: null,
};

export const genres = (state = genresInitialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRES:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        error: null,
        items: action.payload,
        loading: false,
      };

    case types.FETCH_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
