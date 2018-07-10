/**
 * Entry point off client side. 
 * A lot of stuff happens here. Creating store, initial states etc
 */
import React from 'react';

//Provider will generate an optimized application combined with redux
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// Router of react-router can rerender of components in client side
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { configureStore } from './store';

import App from './App'; //Navigator - parent
import shortid from 'shortid';

import './style/default.css';
import '../node_modules/react-select/dist/react-select.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Header from './containers/HeaderContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <div className="container-fluid">
          <Header />
        </div>
        <div className="container">
          <App />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
