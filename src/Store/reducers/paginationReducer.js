import { CHANGE_PAGE, RESET_PAGE_NUMBER, UPDATE_WINDOW_WIDTH } from '../actions/paginationActions';
import { FETCH_PAGE_COUNT } from '../actions/fetchingActions';

const initialState = {
  pages: 0,
  currentPage: 1,
  windowWidth: null,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
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

    case FETCH_PAGE_COUNT:
      return {
        ...state,
        pages: action.payload,
      };

    case UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.payload,
      };

    default:
      return state;
  }
}
