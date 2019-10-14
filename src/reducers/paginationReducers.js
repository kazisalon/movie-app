import * as types from '../helpers/types';

const initialState = {
  pages: 0,
  currentPage: 1,
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case types.SET_PAGE_COUNT:
      return {
        ...state,
        pages: action.payload,
      };

    case types.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case types.RESET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: 1,
      };

    default:
      return state;
  }
}
