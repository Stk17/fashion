import React from 'react';
import {Box, Text} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

interface CloseButtonProps {
  onPress: () => void;
}
const SIZE = 60;
const CloseButton = ({onPress}: CloseButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <Box
        style={{height: SIZE, width: SIZE, borderRadius: SIZE / 2}}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center">
        <Text color="secondary" textAlign="center">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
