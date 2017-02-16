import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class SideMenu extends Component {

  render() {

    const { user: { username: username }} = this.props;
    return (
      <View>
        <Text>{username}</Text>
        <View style={styles.formGroup}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
             <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 40
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


const mapStateToProps = (store) => {
  return {
    user: store.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu)

export default SideMenuContainer;
