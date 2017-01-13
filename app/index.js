// app/index.js
import 'babel-polyfill'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
/*Middleware*/
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
/*Reducers*/
import reducers from './reducers';
/*Routes*/
import {scenes} from './scenes';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const RouterWithRedux = connect()(Router);

const store = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware)
)(createStore)(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <RouterWithRedux scenes={scenes}/>
    </Provider>
  );
}

export default App;
