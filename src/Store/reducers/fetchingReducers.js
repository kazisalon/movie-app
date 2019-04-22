import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actions/fetchingActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        items: action.payload.movies,
        loading: false,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
