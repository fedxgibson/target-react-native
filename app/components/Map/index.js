import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

export default class extends Component {

  render(){
    return (
       <View style={styles.container}>
         <MapView
          style={styles.container}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
       />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop: 64
  },
  mapContainer: {
    height: 40,
    height: 200,
    marginVertical: 50
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: 'black'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#464646',
    marginBottom: 5
  },
  description: {
    lineHeight: 25,
    marginBottom: 10
  },
  signupButton: {
    marginTop: 50
  },
  button: {
    height: 36,
    width: 150,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center'
 },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 }
});
