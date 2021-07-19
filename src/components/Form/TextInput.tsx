import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Box, useTheme} from '../Theme';
import RoundedIcon from '../RoundedIcon';
interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({icon, touched, error, ...props}, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={55}
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius="s"
        padding="s"
        borderColor={reColor}
        alignItems="center">
        <Box padding="s">
          <Icon name={icon} size={16} {...{color}} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...props}
            {...{ref}}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? 'check' : 'x'}
            backgroundColor={!error ? 'primary' : 'danger'}
            color="white"
            size={SIZE}
          />
        )}
      </Box>
    );
  },
);

export default TextInput;
