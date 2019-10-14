// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Helpers
import configureStore from './helpers/configureStore';
// IE 11 polyfills
import 'ie-array-find-polyfill';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
// Styles
import GlobalStyle from './styles';
// Components
import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root'),
);
