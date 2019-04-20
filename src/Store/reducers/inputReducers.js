import {
  FETCH_MOVIES_ADD_INPUT_VALUE,
  RESET_INPUT_VALUE,
} from '../actions/inputActions';

const initialState = {
  inputValue: '',
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_ADD_INPUT_VALUE:
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
