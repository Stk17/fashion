import React, {ReactNode} from 'react';
import {Image, StyleSheet, Platform, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, useTheme} from './Theme';

export const assets = [require('../../assets/pattern1.png')];
const {width, height: wHeight} = Dimensions.get('window');
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
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.6}>
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
              top: -height * 0.61,
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
    </KeyboardAwareScrollView>
  );
};
export default Container;
