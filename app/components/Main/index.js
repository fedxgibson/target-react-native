import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

export default class extends Component {
  render(){

    return (
      <Text>some</Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 40,
    marginTop: 100
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
