import { CHANGE_GENRE_ID } from '../actions/filterActions';

const initialState = {
  // genreId , genreLabel
  value: null,
  label: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENRE_ID:
      return {
        ...state,
        value: action.payload.value,
        label: action.payload.label,
      };

    default:
      return state;
  }
}
