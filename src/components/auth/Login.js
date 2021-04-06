import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as yup from 'yup';
import {Formik} from 'formik';

const reviewSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const [visible, setVisible] = useState(true);
  const handleFormSubmit = (values, actions) => {
    actions.resetForm();
    Login(values);
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#ff69b4" />
      <View style={styles.FormView}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleSubmit,
            handleChange,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="email or user name"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <Text style={styles.errorMessage}>
                {' '}
                {touched.email && errors.email}{' '}
              </Text>
              <View style={styles.password}>
                <TextInput
                  placeholder="password"
                  style={{width: '88%'}}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={visible}
                  onBlur={handleBlur('password')}
                />

                <TouchableOpacity onPress={() => setVisible(prev => !prev)}>
                  <FontAwesome5
                    name={visible ? 'eye-slash' : 'eye'}
                    size={25}
                    color="#ff69b4"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.errorMessage}>
                {touched.password && errors.password}
              </Text>
              <View style={styles.SubmitView}>
                <TouchableOpacity
                  title="submit"
                  style={styles.primaryButton}
                  onPress={handleSubmit}>
                  <Text style={styles.primaryButtonText}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        {/* <Text style={styles.secondaryText}> Don't Have an account ? </Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  errorMessage: {
    alignSelf: 'center',
    color: '#ff1493',
  },

  FormView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  SubmitView: {
    alignItems: 'center',
    marginTop: 30,
  },
  primaryButton: {
    backgroundColor: '#ff69b4',
    width: '70%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#C13584',
    borderRadius: 30,
    alignSelf: 'center',
    margin: 5,
  },
  password: {
    width: Dimensions.get('window').width * 0.8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C13584',
    borderRadius: 30,
  },
});
