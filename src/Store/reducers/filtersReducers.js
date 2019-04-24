import {
  TOGGLE_POPULARITY, TOGGLE_RATINGS, CHANGE_GENRE_VALUE, CHANGE_INPUT_VALUE, RESET_INPUT_VALUE,
} from '../actions/filtersActions';


const initialState = {
  byPopularity: false,
  byRating: false,
  genreId: 0,
  inputValue: '',
};

export default function filtersReducers(state = initialState, action) {
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
    case CHANGE_GENRE_VALUE:
      return {
        ...state,
        genreId: action.payload,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };
    case RESET_INPUT_VALUE:
      return {
        ...state,
        inputValue: '',
      };
    default:
      return state;
  }
}
