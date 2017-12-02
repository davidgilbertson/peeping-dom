import { CHANGE_PAGE, CHANGE_SEARCH_QUERY } from './actionTypes';

export const changePage = page => {
  window.history.pushState({}, '', page);

  return {
    type: CHANGE_PAGE,
    page,
  };
};

export const changeSearchQuery = query => ({
  type: CHANGE_SEARCH_QUERY,
  query,
});
