import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';



const Landing = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>TARGET MVD</Text>
      <Text style={styles.subTitle}>Find people near you & Connect</Text>
      <Text style={styles.description}>
        Create a target wherever on the map, specify
        your interest: Travel, Dating, Music, etc and started
        connecting with others who share your interest.
      </Text>


      <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableHighlight>
      <Button style={styles.description} onPress={Actions.signup} title='Sign Up'  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 40,
    paddingTop: 100,
    paddingBottom: 100
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


export default Landing;
