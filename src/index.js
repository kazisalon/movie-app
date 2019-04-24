import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/store';
import 'ie-array-find-polyfill';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import './index.css';
import App from './App';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
