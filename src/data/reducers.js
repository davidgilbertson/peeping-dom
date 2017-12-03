import { combineReducers } from 'redux';
import { CHANGE_SEARCH_QUERY } from './actionTypes';

function ui(state = {}, action) {
  switch (action.type) {
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
