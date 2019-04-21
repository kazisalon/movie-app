import { CHANGE_GENRE_VALUE } from '../actions/genreActions';

const initialState = {
  value: 0,
  label: 'Genre',
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENRE_VALUE:
      return {
        ...state,
        value: action.payload.value,
        label: action.payload.label,
      };
    default:
      return state;
  }
}
