/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
const convo = []
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class extends Component {
  constructor(props){
    super(props)

    this.state = {
      datasource: ds.cloneWithRows(convo),
      message: ''
    }
  }

  eachMessage(x){
    if(x.person == 2){
      return (
        <View style={styles.messageLeftContainer}>
          <View style={styles.messageLine}>
            <View style={[styles.bubble, styles.leftBubble]}>
              <Text style={styles.textMessage}>{x.message}</Text>
            </View>
            <Text style={styles.messageTime}>10:30</Text>
          </View>
        </View>
      )
      } else {
        return (
          <View style={styles.messageRightContainer}>
            <View style={styles.messageLine}>
              <Text style={styles.messageTime}>10:30</Text>
              <View style={[styles.bubble, styles.rightBubble]}>
                <Text style={[styles.textMessage, styles.rightTextMessage]}>{x.message}</Text>
              </View>
            </View>
          </View>
        )}
  }
  submitThis(){
    convo.push({
      person: 1,
      message: this.state.message
    });

    this.setState({
      datasource: ds.cloneWithRows(convo.reverse()),
      message: ''
    })

    setTimeout(() => {
      this.similator();
    }, 2000);
  }

  similator(){
    convo = convo.reverse();
    convo.push({person:2, message:"When are we gonna hangout Sam!!!!"})
    this.setState({
      datasource: ds.cloneWithRows(convo.reverse())
    })
  }

  render() {
    const { image } = this.props;
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          noScroll={true}
          style={{ flex:1}}
          contentContainerStyle={{ justifyContent:'flex-end' }}
          dataSource={this.state.datasource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
        <View style={[styles.inputContainer, { width: width }]}>
          <TextInput
            style={styles.inputMessage}
            value={message}
            onChangeText={(message) => this.setState({ message })}
            onSubmitEditing={() => this.submitThis()}
            placeholder="Enter Your message here"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent:'space-between',
    paddingTop: 64,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  messageLeftContainer: {
    flexDirection:'row',
    alignItems:'flex-end',
    margin:5
  },
  messageRightContainer: {
    flexDirection:'row',
    alignSelf:'flex-end',
    alignItems:'flex-end',
    margin: 5
  },
  row:{
    flexDirection:'row'
  },
  messageLine: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  bubble: {
    padding:10,
    borderRadius: 10,
    maxWidth: 300
  },
  rightBubble: {
    backgroundColor:'#EFC537',
    marginLeft: 10
  },
  leftBubble: {
    backgroundColor:'#f4f4f4',
    marginRight: 10
  },
  textMessage: {
    fontSize: 13,
    fontWeight:'200'
  },
  rightTextMessage: {
    textAlign: 'right'
  },
  messageTime: {
    fontSize: 10,
    color: '#A1A1A1',
    padding: 5
  },
  inputContainer: {
    alignSelf:'flex-end',
    height:60,
    padding: 10,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
    backgroundColor:'#EFEFEF'
  },
  inputMessage: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white'
  }
});
