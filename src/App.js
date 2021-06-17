/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import logo from "./logo.svg";
import "./App.css";
import thunk from "redux-thunk";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import rootReducer from "./reducers/rootReducer";
import Toggle from "./Toggle";

import store from "./store/store";

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>

        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
