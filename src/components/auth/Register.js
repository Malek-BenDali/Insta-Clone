import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const reviewSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required().min(3),
  password: yup.string().required().min(6),
});

const Register = () => {
  const [visible, setVisible] = useState(true);
  const handleFormSubmit = (values, actions) => {
    actions.resetForm();
    Login(values);
  };
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar backgroundColor="#ff69b4" />

      <View style={styles.FormView}>
        <Formik
          initialValues={{
            email: '',
            name: '',
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
                placeholder="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <Text style={styles.errorMessage}>
                {touched.email && errors.email}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              <Text style={styles.errorMessage}>
                {touched.name && errors.name}
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
        <TouchableOpacity
          style={styles.secondaryText}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryText}> Already have an account ? </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  FormView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  errorMessage: {
    alignSelf: 'center',
    color: '#ff1493',
  },
  primaryButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
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
  SubmitView: {
    alignItems: 'center',
    marginTop: 30,
  },
  secondaryText: {
    color: '#ff69b4',
    marginTop: 15,
    alignSelf: 'flex-end',
    marginRight: 7,
  },
  primaryButton: {
    backgroundColor: '#ff69b4',
    width: '70%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
