import React, {useRef} from 'react';
//import SocialLogin from '../components/SocialLogin';
import {Container, Button, Text, Box} from '../components';
//import { TextInput } from './components/Form';
import {TextInput as RNTextInput} from 'react-native';
import {Checkbox} from './components/Form';
import {Routes, StackNavigationProps} from '../components/Navigation';
import {useFormik} from 'formik';
import Footer from './components/Footer';

{
  /* const LoginSchema =Yup.object().shape({
  password: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),});
 */
}

const Login = ({navigation}: StackNavigationProps<Routes, 'Login'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    //validationSchema :LoginSchema,
    initialValues: {email: '', password: '', remember: true},
    onSubmit: values => console.log(values),
  });
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );
  return (
    <Container {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
          <Box flexDirection="row" justifyContent="center">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => navigation.navigate('ForgotPassword')}>
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
      </Box>
    </Container>
  );
};
export default Login;
