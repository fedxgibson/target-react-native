import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { View, TouchableHighlight, StyleSheet, Text, TextInput } from 'react-native';

const textInput =  ({input, ...rest}) => <TextInput onChangeText={input.onChange} style={styles.input} />

function some(props) {
  console.log('do something');
  console.log(props);
};

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <View style={styles.container} >
      <View style={styles.formGroup}>
        <Text style={styles.label}>EMAIL</Text>
        <Field style={styles.formGroup} name="email" component={textInput}/>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>PASSWORD</Text>
        <Field style={styles.formGroup} name="password" component={textInput}/>
      </View>
      <View style={styles.formGroup}>
        <TouchableHighlight style={styles.button}
                            onPress={handleSubmit}
                            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    // paddingTop: 50,
    // paddingBottom: 50
  },
  formGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fields: {
    height: 200
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
  button: {
    // zIndex: -1000,
    height: 36,
    width: 150,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center'
 },
  buttonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
 }
});

// Decorate the form component
export default reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);
