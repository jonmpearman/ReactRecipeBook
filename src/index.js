import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import SearchBar from './containers/search_bar';

import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.hydrate(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'));
