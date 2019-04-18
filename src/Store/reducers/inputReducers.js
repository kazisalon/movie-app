import { FETCH_MOVIES_ADD_INPUT_VALUE } from '../actions/inputActions';

const initialState = {
  inputValue: '',
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_ADD_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };

    default:
      return state;
  }
}
