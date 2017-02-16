import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CreateTarget, TargetTopics, TargetData } from './Steps';

const { width } = Dimensions.get('window');

const CREATE_TARGET = 'CreateTarget';
const TARGET_DATA = 'TargetData';
const TARGET_TOPICS = 'TargetTopics';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      step: CREATE_TARGET
    }
  }

  getHeight = (e) => {
    console.log(e.nativeEvent);
    this.setState({
      offset: -1*e.nativeEvent.layout.height
    });
  }

  nextStep = () => {
    this.setState({
      step: TARGET_DATA
    })
  }

  render () {
    const { isActive } = this.props;
    const offsetClass = {
      bottom: this.props.isActive ? 0: this.state.offset
    };

    const renderStep = () => {
      if(this.state.step == CREATE_TARGET) {
        return <CreateTarget nextStep={this.nextStep}/>
      } else if(this.state.step == TARGET_DATA) {
        return <TargetData targetData={this.props.targetData} onTargetDataChange={this.props.onTargetDataChange}/>
      }
    }

    return (
      <Animated.View onLayout={(e) => this.getHeight(e)} style={[styles.targetProcessWindow, offsetClass]} >
        { renderStep() }
      </Animated.View>
    )
  }
};

const styles = StyleSheet.create({
  targetProcessWindow: {
    position: 'absolute',
    bottom: 0,
    zIndex: 50,
    width: width,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
