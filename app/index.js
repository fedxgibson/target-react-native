// app/index.js

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Landing from './components/Landing';
import GrayScreen from './components/GrayScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="landing"
          component={Landing}
          title="Landing"
          hideNavBar
          initial
        />
        <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}

export default App;
