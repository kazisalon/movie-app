import * as types from '../helpers/types';

export const setPageCount = count => ({
  type: types.SET_PAGE_COUNT,
  payload: count,
});

export const changePage = nextPage => ({
  type: types.CHANGE_PAGE,
  payload: nextPage,
});

export const resetPageNubmer = () => ({
  type: types.RESET_PAGE_NUMBER,
});
