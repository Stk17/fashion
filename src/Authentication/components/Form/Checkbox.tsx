import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import {Box, Text, Button} from '../../../components';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({label, onChange, checked}: CheckboxProps) => {
  return (
    <RectButton onPress={() => onChange()} style={{justifyContent: 'center'}}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}>
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button"> {label}</Text>
      </Box>
    </RectButton>
  );
};
export default Checkbox;
