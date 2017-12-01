import captureAction from '../peepingDomUtils/utils/captureAction';

import { CHANGE_PAGE } from './actionTypes';

export const changePage = page => {
  window.history.pushState({}, '', page);

  const action = {
    type: CHANGE_PAGE,
    page,
  };

  captureAction(action);

  return action;
};
