import * as types from '../helpers/types';

const moviesInitialState = {
  movies: [],
  loading: false,
  error: null,
};

export const movies = (state = moviesInitialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        error: null,
        movies: action.payload,
        loading: false,
      };

    case types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const movieDetailsinitialState = {
  details: {},
  loading: false,
  error: null,
};

export const movieDetails = (state = movieDetailsinitialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        details: action.payload,
        loading: false,
      };

    case types.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
