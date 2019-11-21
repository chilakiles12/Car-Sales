import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { CarReducer } from './reducers/CarReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(CarReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//part 2: add import createStore, createStore with reducer, import Provider and wrap App with store={store}
