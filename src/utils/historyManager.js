import { captureCurrentUrl } from '../peepingDomUtils/utils';

const onChangeListeners = [];

function push(pathName, params) {
  const nextUrl = new URL(pathName, document.location.href);

  if (params) {
    nextUrl.search = new URLSearchParams(params);
  }

  window.history.pushState({}, '', nextUrl.toString());

  captureCurrentUrl();

  onChangeListeners.forEach(callback => callback(pathName));
}

export default {
  push,
  onChange: cb => onChangeListeners.push(cb),
};
