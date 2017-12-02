import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './data/reducers';
import {
  captureActionMiddleware,
  captureCurrentUrl,
} from './peepingDomUtils/utils';
import './index.css';
import AppContainer from './components/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';

captureCurrentUrl(); // so the first item in history is the current URL

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  ui: {
    // currentPage: document.location.pathname,
    query: '',
  },
  products: [
    {
      id: 'table',
      name: 'A great table',
      price: '$3,000',
    },
    {
      id: 'chair',
      name: 'An uncomfortable chair',
      price: '$800',
    },
    {
      id: 'stool',
      name: 'A chair with no back',
      price: '$30',
    },
  ],
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(captureActionMiddleware),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer pathName={document.location.pathname} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
