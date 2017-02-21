// app/index.js
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
import API from './lib/api'

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
const RouterWithRedux = connect()(Router);





async function configureStore(store) {
  const promise = new Promise((resolve, reject) => {
    try {


      persistStore(store, { storage: AsyncStorage }, () =>{
        resolve(store);
         API.setStore(store);
         console.log('vavaa')

       });

    } catch (e) {
      reject(e);
    }
  });
  return await promise;
}

function initialize () {
  try{
    const store = createStore(
      reducers,
      undefined,
      compose(
        autoRehydrate(),
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware)
      )
    );
    configureStore(store);
    return store;
  }catch(e){
        console.log('caught error', e);
        // Handle exceptions
    }
}

export class App extends Component {


  componentWillMount () {
    this.store = initialize();
  }

  render () {
    return (
      <Provider store={this.store}>
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
