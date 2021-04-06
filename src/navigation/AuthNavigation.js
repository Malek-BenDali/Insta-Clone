import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Landing, Login, Register} from '../components/auth';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
