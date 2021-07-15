import React, {ReactNode} from 'react';
import {Image, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, useTheme} from './Theme';

export const assets = [require('../../assets/pattern1.png')];
const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box borderBottomLeftRadius="xl" height={height * 0.00001}>
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.001,
          }}
        />
      </Box>
      <Box
        flex={1}
        borderRadius="xl"
        borderTopLeftRadius={0}
        backgroundColor="white">
        {children}
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
      </Box>
      <Box height={insets.bottom} />
    </Box>
  );
};
export default Container;
