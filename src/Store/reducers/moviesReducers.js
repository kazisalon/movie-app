import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/moviesActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        items: action.payload.movies,
        loading: false
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: action.payload.movies,
      };

    default:
      return state;
  }
}
