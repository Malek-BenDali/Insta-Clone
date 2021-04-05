import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Register from './Register';
import Login from './Login';

const CIRCLE_SIZE = 100;
const Circle = ({onPress, animatedValue, barItem, text, index}) => {
  const containerBackGround = animatedValue.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 1],
    outputRange: ['gold', 'gold', 'gold', '#444', '#444'],
  });
  const cercleBackGround = animatedValue.interpolate({
    inputRange: [0, 0.001, 0.5, 0.7, 1],
    outputRange: ['#444', '#444', '#444', 'gold', 'gold'],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        {
          backgroundColor: containerBackGround,
        },
      ]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated={true}
        barStyle={barItem}
      />
      <Animated.View
        style={{
          marginTop: 100,
          backgroundColor: cercleBackGround,
          alignSelf: 'center',
          width: '90%',
          height: '50%',
          justifyContent: 'space-between',
        }}>
        <Text> Register</Text>
        {index ? <Login /> : <Register />}
      </Animated.View>
      <Animated.View
        style={[
          styles.circle,
          {backgroundColor: cercleBackGround},
          {
            transform: [
              {
                perspective: 100, //tkadem lik l view #3d
              },
              {
                rotateY: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 8, 1],
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circle, styles.circleButton]}>
            <Animated.Text
              style={[
                {color: '#fff'},
                {
                  transform: [
                    {
                      rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['0deg', '-90deg', '-180deg'],
                      }),
                    },
                  ],
                },
              ]}>
              {text}
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const Landing = () => {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(1);
  const [textButton, setTextButton] = useState('Sign Up');
  const [BarItem, setBarItem] = useState('dark-content');

  const animation = toValue =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });

  const onPress = () => {
    setTimeout(() => {
      setBarItem(style =>
        style === 'light-content' ? 'dark-content' : 'light-content',
      );
      setTextButton(text => (text === 'Sign Up' ? 'Login' : 'Sign Up'));
      setIndex(index ? 0 : 1);
    }, 1500);
    animation(index ? 1 : 0).start();
  };

  return (
    <>
      <Circle
        onPress={onPress}
        barItem={BarItem}
        index={index}
        animatedValue={animatedValue}
        text={textButton}
      />

      {/* <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: 'gold',
  },
  circle: {
    backgroundColor: '#444',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  circleButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
