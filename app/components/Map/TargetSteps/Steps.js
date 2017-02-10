import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { reduxForm, Field} from 'redux-form';

const { width } = Dimensions.get('window');

const CREATE_TARGET = 'createTarget';
const TARGET_DATA = 'targetData';
const TARGET_TOPICS = 'targetTopics';

export const CreateTarget = ({nextStep}) => {
  return (
    <View style={styles.containerCreateTarget}>
      <TouchableOpacity
        style={styles.buttonTarget}
        onPress={nextStep}
      >
        <Image source={require('../../../images/target.png')}/>
        <Text>CREATE TARGET</Text>
      </TouchableOpacity>
    </View>
  );
}

const textInput =  ({input, ...rest}) => <TextInput autoCapitalize='none' onChangeText={input.onChange} style={styles.input} />

const TargetDataForm = ({targetData, onTargetDataChange, openTopics}) => {
  return (
    <View style={styles.fieldGroups}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>SPECIFY AREA LENGTH</Text>
        <TextInput
          autoCapitalize='none'
          value={targetData.radius.toString()}
          onChangeText={(value) => onTargetDataChange({...targetData, radius: Number(value)})}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>TARGET TITLE</Text>
        <TextInput
          autoCapitalize='none'
          value={targetData.title}
          onChangeText={(value) => onTargetDataChange({...targetData, title: value})}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>SELECT A TOPIC</Text>
        <TouchableOpacity style={styles.topicButton} onPress={openTopics} underlayColor='#99d9f4'>
          <Text name="password">{targetData.topicName}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </View>

  );
}

export class TargetData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openedTopics: false
    }
  }

  closeTopics = (topic) => {
    this.props.onTargetDataChange({...this.props.targetData, topicName: topic.name});
    this.setState({openedTopics: false});
  }

  openTopics = () => {
    this.setState({openedTopics: true});
  }

  render() {
    const topics = TargetTopics(this.closeTopics);
    return (
          !this.state.openedTopics ?
            (
              <TargetDataReduxForm targetData={this.props.targetData} onTargetDataChange={this.props.onTargetDataChange} openTopics={this.openTopics}/>
            ) : <View style={styles.topicList}>{topics}</View>

        )
      }
}

export const TargetDataReduxForm = reduxForm({
  form: 'targetData' // a unique name for this form
})(TargetDataForm);

export const TargetTopics = (closeTopics) => {

  const topics = [
    {
      name: 'Art',
      image: require('../../../images/art.png')
    }, {
      name: 'Dating',
      image: require('../../../images/dating.png')
    }, {
      name: 'Food',
      image: require('../../../images/food.png')
    }, {
      name: 'Football',
      image: require('../../../images/football.png')
    }, {
      name: 'Music',
      image: require('../../../images/music.png')
    }, {
      name: 'Politics',
      image: require('../../../images/politics.png')
    }, {
      name: 'Series',
      image: require('../../../images/series.png')
    }, {
      name: 'Travel',
      image: require('../../../images/travel.png')
    },
  ]

   return topics.map((topic) => {
      return (
        <TouchableOpacity
          key={topic.name}
          onPress={() => closeTopics(topic)}
          style={styles.topic}
        >
          <Image style={styles.topicImage} source={topic.image}/>
          <Text>{topic.name}</Text>
        </TouchableOpacity>
      )
    });
}

const styles = StyleSheet.create({
  containerCreateTarget: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20

  },
  buttonTarget: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  fieldGroups: {
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },
  label: {
    marginBottom: 5,
    textAlign: 'center'
  },
  formGroup: {
    alignItems: 'center',
    marginBottom: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  fields: {
    height: 200
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: 'black',
  },
  topicButton: {
    height: 39,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 39,
    width: 160,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 },
 topicList: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'stretch'
 },
 topic: {
  flex:1,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  height: 45,
  padding: 15,
  borderBottomWidth: 1
},
topicImage: {
  margin: 10
}
});
