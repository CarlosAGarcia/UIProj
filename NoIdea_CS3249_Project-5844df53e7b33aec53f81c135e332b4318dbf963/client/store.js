/**
 * Creates Redux store
 */
import AppReducer from './reducers/AppReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './components/DevTools';
import persistState from 'redux-localstorage';

export const configureStore = (initialState = {}) => {
  // This is a enhancers for adding thunk funtionality into the middleware. It
  // enable developers to use asynchronous call instead of dispatching actions to
  // reducers directly.
  const enhancers = [persistState('user'), applyMiddleware(thunk)];

  if (process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(DevTools.instrument());
  }
  // Createstore function is imported from redux. It takes three arguements - 1)
  // rootReducer 2) initalstates of store 3) enhancers In this simplified version,
  // the appReducer is the rootReducer.
  const store = createStore(AppReducer, initialState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/AppReducer', () => {
      const nextReducer = require('./reducers/AppReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
