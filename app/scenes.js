import React, { Component } from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Landing from './containers/Landing';
import Signup from './containers/Signup';

export const scenes = Actions.create(
    <Scene key="root">
      <Scene key="landing"
        component={Landing}
        title="Landing"
        hideNavBar
        initial
      />
      <Scene
        key="signup"
        component={Signup}
        title="Sign Up"
        hideNavBar
      />
    </Scene>
)
