/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import 'babel-polyfill'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './app';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


AppRegistry.registerComponent('target', () => App);
