/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import 'babel-polyfill'
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {App, configureStore } from './app';

AppRegistry.registerComponent('target', () => App);
