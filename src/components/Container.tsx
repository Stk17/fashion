import React, {ReactNode} from 'react';
import {Image, StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            borderBottomRightRadius={0}
            overflow="hidden"
            height={height * 0.61}>
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
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
          backgroundColor="white"
          marginBottom="xl">
          {children}
        </Box>
        <Box backgroundColor="secondary" paddingTop="xl" paddingBottom="xl">
          {footer}
        </Box>
        <Box paddingTop="s" marginBottom="xl" height={insets.bottom} />
      </Box>
    </KeyboardAwareScrollView>
  );
};
export default Container;
