import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import _ from 'lodash';
import ProfileForm from './profileForm';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <ProfileForm onSubmit={this.props.onSubmitSignup} />
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
  }
});

export default Profile;
