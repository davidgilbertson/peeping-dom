import { combineReducers } from 'redux';
import { CHANGE_PAGE } from './actionTypes';

const initialPageState = {
  currentPage: '/',
};

function ui(state = initialPageState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  ui,
});

export default reducers;
