import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './data/reducers';

import './index.css';
import AppContainer from './components/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer location={document.location} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
