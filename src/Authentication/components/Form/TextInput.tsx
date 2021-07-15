import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Box, useTheme} from '../../../components';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({icon, touched, error, ...props}: TextInputProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={60}
      borderWidth={StyleSheet.hairlineWidth}
      borderRadius="s"
      padding="s"
      borderColor={reColor}
      alignItems="center">
      <Box padding="s"></Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'primary' : 'danger'}>
          <Icon name={!error ? 'check' : 'x'} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
