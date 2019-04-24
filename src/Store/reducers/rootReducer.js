import { combineReducers } from 'redux';
import movies from './moviesReducers';
import filters from './filtersReducers';

export default combineReducers({
  movies,
  filters,
});
