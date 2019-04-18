import { CHANGE_PAGE } from '../actions/paginationActions';
import { RESET_PAGE_NUMBER } from '../actions/inputActions';
import { FETCH_PAGE_COUNT } from '../actions/fetchingActions';

const initialState = {
  pages: 0,
  currentPage: 1,
  offset: 0,
};

export default function moviesReducer(state = initialState, action) {
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

    default:
      return state;
  }
}
