import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import Login from './components/login.jsx';
import Landing from './pages/landing.jsx';
import Dashboard from './pages/dashboard.jsx';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './js/reducer/index';
import store from "./js/store/index";
import { addArticle } from "./actions/index";



window.store = store;
window.addArticle = addArticle;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;