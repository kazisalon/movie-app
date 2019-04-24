import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_PAGE_COUNT,
} from '../actions/fetchingActions';
import { CHANGE_PAGE, RESET_PAGE_NUMBER, UPDATE_WINDOW_WIDTH } from '../actions/paginationActions';


const initialState = {
  items: [],
  loading: false,
  error: null,
  pages: 0,
  currentPage: 1,
  windowWidth: null,
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

    case FETCH_PAGE_COUNT:
      return {
        ...state,
        pages: action.payload.count,
      };

    case RESET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.payload.width,
      };

    default:
      return state;
  }
}
