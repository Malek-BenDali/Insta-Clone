import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/navigation/mainNavigation';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (!user) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    });
    return () => {};
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
