import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './data/reducers';
import productData from './data/productData';
import {
  captureActionMiddleware,
  startListeningForPlayback,
  startRecording,
} from './peepingDomUtils/utils';
import './index.css';
import AppContainer from './components/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  ui: {
    query: '',
  },
  products: productData,
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(captureActionMiddleware),
  ),
);

startRecording();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer pathName={document.location.pathname} />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  startListeningForPlayback(store);
}

registerServiceWorker();
