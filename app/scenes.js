import React, { Component } from 'react';
import { Actions, ActionConst,  Scene, Modal, Switch } from 'react-native-router-flux';
import Landing from './containers/Landing';
import Signup from './containers/Signup';
import Wrapper from './containers/Wrapper';
import Main from './containers/Main';
import Chat from './components/Chat';
import Profile from './containers/Profile';
import Historial from './components/Historial';

import { connect } from 'react-redux';
import Map from './components/Map';
import Drawer from 'react-native-drawer';

export const scenes = Actions.create(
  <Scene key="root"
    hideNavBar
    initial
    >
    <Scene
      hideNavBar
      key="landing"
      component={Landing}
      title="Landing"
      initial
    />
    <Scene
      key="signup"
      component={Signup}
      title="Sign Up"
    />
    <Scene authOnly={true} key="app" component={Wrapper} direction='leftToRight'>
      <Scene key="k1" navigationBarStyle={{backgroundColor: 'white'}}>
        <Scene
          key="profile"
          title="Profile"
          navigationBarStyle={{backgroundColor: 'white', borderBottomWidth: 0}}
          component={Profile}
          backButtonImage={require('./images/left-arrow.png')}
        />
        <Scene
          key="map"
          initial
          title="Map"
          component={Map}
          onLeft={() => Actions.profile()}
          leftButtonImage={require('./images/profile.png')}
          onRight={() => Actions.historial()}
          rightButtonImage={require('./images/chat-bubble.png')}
        />
        <Scene
          key="historial"
          title="Chat"
          component={Historial}
          backButtonImage={require('./images/left-arrow.png')}
        />
        <Scene
          key="chat"
          // getTitle={(state) => titleExample(state)}
          component={Chat}
          backButtonImage={require('./images/left-arrow.png')}
        />
      </Scene>
    </Scene>
  </Scene>
)

const checkAuth = (props) => {
  debugger;
  if(props.auth.user && props.auth.user.token){
    return  "app"
  }else { return "landing" }
}

import { View, TouchableHighlight, StyleSheet, Text, TextInput, Image } from 'react-native';

const titleExample = (state) => {
  return (
    <View style={{width: 40, height: 40}}>
      <Text>Example</Text>
      <Text>other thing</Text>
    </View>
  );
}
