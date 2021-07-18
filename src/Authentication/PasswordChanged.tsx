import React from 'react';
import {Box, Container, Text, Button, CloseButton} from '../components';
import {Routes, StackNavigationProps} from '../components/Navigation';
import Icon from 'react-native-vector-icons/Feather';
const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
          style={{height: SIZE, width: SIZE, borderRadius: SIZE / 2}}>
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box alignItems="center" marginTop="m" marginBottom="xl">
          <Button
            variant="primary"
            onPress={() => navigation.navigate('Login')}
            label="Reset password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
