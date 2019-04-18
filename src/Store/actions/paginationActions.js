export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = nextPage => ({
  type: CHANGE_PAGE,
  payload: nextPage,
});
