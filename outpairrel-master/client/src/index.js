import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import allReducers from './reducers';
import { CookiesProvider } from 'react-cookie';

window.onload = function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </CookiesProvider>,
    document.getElementById('root')
  );
};
