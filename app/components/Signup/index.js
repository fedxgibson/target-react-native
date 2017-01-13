import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Picker,
  View,
  TouchableHighlight
} from 'react-native';
import _ from 'lodash';

class Landing extends Component {

  constructor(props) {
   super(props);
  }

  render () {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>


        <TouchableHighlight style={styles.button} onPress={() => this.props.onSubmitLogin(this.refs.form.getValue())} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableHighlight>
      </View>
    )
  }
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
    zIndex: -1000,
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
