import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import _ from 'lodash';
import SignupForm from './signupForm';
import { Actions } from 'react-native-router-flux';

class Signup extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <SignupForm onSubmit={this.props.onSubmitSignup} />
        <Button onPress={Actions.landing} title='Log In'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingRight: 80,
    paddingLeft: 80,
    paddingBottom: 40
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
  }
});


export default Signup;
