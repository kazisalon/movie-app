import { combineReducers } from 'redux';
import * as filters from './filtersReducers';
import * as movies from './moviesReducers';
import pagination from './paginationReducers';

export default combineReducers({
  ...movies,
  ...filters,
  pagination,
});
