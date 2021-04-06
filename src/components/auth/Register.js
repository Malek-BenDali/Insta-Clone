import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View></View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
});
