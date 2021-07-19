import React from 'react';
import Icon from 'react-native-vector-icons';
import {Theme, Box, Text} from './Theme';
export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{borderRadius: size / 2}}
      {...{backgroundColor}}>
      <Text style={{width: iconSize, height: iconSize}}>
        <Icon size={iconSize} {...{name, color}} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
