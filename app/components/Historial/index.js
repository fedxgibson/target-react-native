import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Thread from './Thread';

export default class extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows([{
        userName: 'Federico Martinez',
        lastMessage: 'Hey! I am using whattsap...not...',
        id: 1
      }])
    }
  }

  eachMessage = (data) => {
    return (
      <Thread
        userName={data.userName}
        lastMessage={data.lastMessage}
        onPress={() => Actions.chat(data.id)}
      />
    )
  }

  render(){
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.eachMessage}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64
  }
});
