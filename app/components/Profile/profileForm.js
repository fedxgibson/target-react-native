import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { View, TouchableHighlight, StyleSheet, Text, TextInput, Image } from 'react-native';

const textInput =  ({input, ...rest}) => {
  return <TextInput autoCapitalize='none' value={input.value} onChangeText={input.onChange} style={styles.input} />
}

const ProfileForm = ({ handleSubmit }) => {

  return (
    <View style={styles.container} >
      <View style={[styles.pictureGroup]}>
        <Image source={require('../../images/profile-circle.png')}/>
        <Image style={styles.profilePicture} source={require('../../images/profile-picture.png')}/>
      </View>

      <View style={styles.fieldGroups}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>NAME</Text>
          <Field style={styles.formGroup} name="name" component={textInput}/>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>EMAIL</Text>
          <Field style={styles.formGroup} name="email" component={textInput}/>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>PASSWORD</Text>
          <Field style={styles.formGroup} name="password" component={textInput}/>
        </View>
      </View>

      <TouchableHighlight style={styles.button} onPress={handleSubmit} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>SAVE CHANGES</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  formGroup: {
    alignItems: 'center',
    marginBottom: 15
  },
  fields: {
    height: 200
  },
  selectStyle: {
    borderWidth: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1
  },
  label: {
    marginBottom: 5
  },
  pictureGroup: {
    top: 30,
    position: 'relative',
    right: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldGroups: {
    flex: 1,
    flexDirection: 'column',
  },
  profilePicture: {
    position: 'relative',
    bottom: 105,
    left: 40,
    alignSelf: 'center'
  },
  input: {
    borderWidth: 1,
    height: 37,
    borderColor: 'black',
  },
  button: {
    height: 39,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 }
});

// Decorate the form component
export default reduxForm({
  form: 'profile' // a unique name for this form
})(ProfileForm);
