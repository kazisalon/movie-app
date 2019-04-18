import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_ADD_INPUT_VALUE,
} from '../actions/moviesActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  inputValue: '',
  IMDbData: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
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
        items: action.payload.movies,
      };

    case FETCH_MOVIES_ADD_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };

    default:
      return state;
  }
}
