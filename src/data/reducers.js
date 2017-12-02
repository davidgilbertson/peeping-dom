import { combineReducers } from 'redux';
import { CHANGE_PAGE, CHANGE_SEARCH_QUERY } from './actionTypes';

function ui(state = {}, action) {
  switch (action.type) {
    case CHANGE_PAGE: // TODO (davidg): strip out page change everywhere
      return {
        ...state,
        currentPage: action.page,
      };
    case CHANGE_SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
}

function products(state = []) {
  return state;
}

const reducers = combineReducers({
  ui,
  products,
});

export default reducers;
