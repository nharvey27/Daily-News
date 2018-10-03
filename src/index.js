
import Main from "./components/Main"
import ArticlesContainer from './components/ArticlesContainer'
import configureStore from "./stores/configureStore"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { Provider } from "react-redux"
import { syncHistoryWithStore } from "react-router-redux"
import { createBrowserHistory } from 'history';

const store = configureStore()
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main>
        <Route component={ArticlesContainer}/>
      </Main>
    </Router>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();