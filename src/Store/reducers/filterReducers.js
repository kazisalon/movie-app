import { TOGGLE_POPULARITY, TOGGLE_RATINGS } from '../actions/filterActions';

const initialState = {
  byPopularity: false,
  byRating: false,
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POPULARITY:
      return {
        ...state,
        byPopularity: !state.byPopularity,
      };
    case TOGGLE_RATINGS:
      return {
        ...state,
        byRating: !state.byRating,
      };
    default:
      return state;
  }
}
