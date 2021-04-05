import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>e - mail </Text>
      <TextInput style={{backgroundColor: '#fff', width: 100}} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
