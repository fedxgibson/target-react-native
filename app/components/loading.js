import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Bubbles } from 'react-native-loader'
import { connect } from 'react-redux';

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <View style={styles.container}>
      <Bubbles size={10} color="#AAA" />
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute'
  }
});

const mapStateToProps = (state) => {
  return {
    isLoading: false
  }
}

const container = connect(
  mapStateToProps,
  null
)(Loading)

export default container;
