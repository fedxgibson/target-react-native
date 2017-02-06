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
import { scenes } from './scenes';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import Loading from './components/loading';
import {
  View,
  StyleSheet
} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const RouterWithRedux = connect()(Router);
const store = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware)
)(createStore, {
  isLoading: false
},autoRehydrate())(reducers);
persistStore(store, {storage: AsyncStorage});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style= {styles.container}>
          <RouterWithRedux scenes={scenes}/>
          <Loading/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default App;
