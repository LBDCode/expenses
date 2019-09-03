import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Login from './components/login.jsx';
import rootReducer from './js/reducer/index';
import store from "./js/store/index";
import { addArticle } from "./actions/index";

/* eslint-disable no-underscore-dangle */

window.store = store;
window.addArticle = addArticle;

/* eslint-enable */

ReactDOM.render((
  <Provider store={store}>
    <Login />
  </Provider>
), document.getElementById('react-app'));