import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import _ from 'lodash';
import ProfileForm from './profileForm';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ProfileForm onSubmit={this.props.onUpdateProfile} initialValues={this.props.userData.user}/>

        <TouchableHighlight style={styles.button} onPress={this.props.onLogOut} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>LOG OUT</Text>
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
    paddingRight: 80,
    paddingLeft: 80,
    paddingBottom: 40,
    paddingTop: 64
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
    height: 39,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 }
});

export default Profile;
