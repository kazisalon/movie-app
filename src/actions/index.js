import * as fetchingActions from './fetchingActions';
import * as filtersActions from './filtersActions';
import * as paginationActions from './paginationActions';

export default {
  ...fetchingActions,
  ...filtersActions,
  ...paginationActions,
};
