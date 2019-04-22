export const CHANGE_PAGE = 'CHANGE_PAGE';
export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';
export const RESET_PAGE_NUMBER = 'RESET_PAGE_NUMBER';

export const changePage = nextPage => ({
  type: CHANGE_PAGE,
  payload: nextPage,
});

export const resetPageNumber = () => ({
  type: RESET_PAGE_NUMBER,
  payload: 1,
});

export const updateWindowWidth = width => ({
  type: UPDATE_WINDOW_WIDTH,
  payload: { width },
});
