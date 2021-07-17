import React from 'react';
//import SocialLogin from '../components/SocialLogin';
import {Container, Button, Text, Box} from '../../components';
import {TextInput} from '../components/Form';
import {Checkbox} from '../components/Form';
import {Routes, StackNavigationProps} from '../../components/Navigation';
import {Formik} from 'formik';
import * as Yup from 'yup';
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({}: StackNavigationProps<Routes, 'Login'>) => {
  const footer = (
    <>
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('SignUp!')}>
          <Box flexDirection="row" justifyContent="center" flex={1}>
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{footer}}>
      <Box padding="s">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="s">
          Use your credentials below and login to your account
        </Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{email: '', password: '', remember: true}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter your Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
              />
              <Box flexDirection="row" justifyContent="center">
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary"> Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
export default Login;
