import React from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from '../components';
import {AuthNavigationProps} from '../components/Navigation';
//import Icon from 'react-native-vector-icons/Feather';
const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<'PasswordChanged'>) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            color="secondary"
            backgroundColor="background"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }>
      <Box alignSelf="center">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />

        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
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
