import { CHANGE_SEARCH_QUERY } from './actionTypes';

export const changeSearchQuery = query => ({
  type: CHANGE_SEARCH_QUERY,
  query,
});
