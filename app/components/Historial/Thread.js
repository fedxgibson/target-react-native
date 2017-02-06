import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const component = ({userName, lastMessage, userThumbnail, topic, onPress}) => {
  const topicThumbnail = require(`../../images/movies.png`);
  userThumbnail = require('../../images/generic-user.png');

  return (
    <TouchableOpacity style={styles.threadBox} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Image style={styles.userThumbnail} source={userThumbnail}/>
          <View style={styles.textGroup}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.userName}>{userName}</Text>
            <Text style={styles.lastMessage}>{lastMessage}</Text>
          </View>
        </View>
        {
          topicThumbnail && <Image style={styles.topicThumbnail} source={topicThumbnail}/>
        }
      </View>
    </TouchableOpacity>
  );
}

export default component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  threadBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    maxHeight: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#708090'
  },
  imageBox: {
    paddingLeft: 15,
    paddingRight: 15
  },
  textGroup: {
    flex: 1,
    paddingRight: 30,
    flexDirection: 'column',
  },
  leftBox: {
    flex: 1,
    flexDirection: 'row',
  },
  topicThumbnail: {
    height: 20,
    width: 20,
    alignSelf: 'center'
  },
  userThumbnail: {
    flex: -1,
    alignSelf: 'center',
    height: 33,
    width: 33,
    marginLeft: 15,
    marginRight: 15
  },
  userName: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18
  },
  lastMessage: {
    color: 'black',
    fontWeight: "100",
    fontSize: 13,
    lineHeight: 18
  }
});
