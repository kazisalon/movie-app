import { combineReducers } from 'redux';
import fetching from './fetchingReducers';
import inputReducers from './inputReducers';
import paginationReducers from './paginationReducer';
import filterReducers from './filterReducers';

export default combineReducers({
  fetching,
  inputReducers,
  paginationReducers,
  filterReducers,
});
