import React from 'react';
import {Linking} from 'react-native';
import {Box, Container, Button, Text} from '../components';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../components/Navigation';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from '../components/Form';
import Footer from './components/Footer';
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'ForgotPassword'>) => {
  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: {email: ''},
    onSubmit: () => navigation.navigate('PasswordChanged'),
  });
  const footer = (
    <Footer
      title="Don't work"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );
  return (
    <Container pattern={2} {...{footer}}>
      <Box padding="xl" justifyContent="center" flex={1} marginBottom="xl">
        <Text variant="title1" textAlign="center" marginBottom="xl">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="xl">
          Enter the email address associated with your account
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
              returnKeyLabel="go"
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="xl" marginBottom="xl">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset password"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default ForgotPassword;
