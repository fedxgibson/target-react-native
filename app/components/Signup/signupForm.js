import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { View, TouchableHighlight, StyleSheet, Text, TextInput, PickerIOS } from 'react-native';
import ModalPicker from 'react-native-modal-picker'


const textInput =  ({input, ...rest}) => <TextInput autoCapitalize='none' onChangeText={input.onChange} style={styles.input} />

const pickerInput = ({ input: { onChange, ...restInput }}) => {
  const genders = [{
    key: 'male',
    label: 'Male'
  },{
    key: 'female',
    label: 'Female'
  }];

  return (
    <ModalPicker
      style={styles.picker}
      selectStyle={styles.selectStyle}
      data={genders}
      initValue="Select Gender"
      onChange={onChange}
    />
  )
}

const SignupForm = ({ handleSubmit, onSubmit }) => {

  const transformData = (data) =>  {
    if ( data && data.gender){
      data.gender = data.gender.key;
    }
    onSubmit(data);
  }

  return (
    <View style={styles.container} >
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

      <View style={styles.formGroup}>
        <Text style={styles.label}>CONFIRM PASSWORD</Text>
        <Field style={styles.formGroup} name="confirmPassword" component={textInput}/>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>GENDER</Text>
        <Field style={styles.formGroup} name="gender" component={pickerInput}/>
      </View>

      <View style={styles.formGroup}>
        <TouchableHighlight style={styles.button} onPress={handleSubmit(transformData)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 50,
  },
  formGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
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
  input: {
    // flex: 1,
    borderWidth: 1,
    height: 50,
    borderColor: 'black',
  },
  picker: {
    borderWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderColor: 'black',
  },
  button: {
    height: 50,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 }
});

// Decorate the form component
export default reduxForm({
  form: 'signup' // a unique name for this form
})(SignupForm);
