import React, {ReactNode} from 'react';
import {Image, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, useTheme} from './Theme';

export const assets = [
  require('../../assets/pattern1.png'),
  require('../../assets/pattern2.png'),
  require('../../assets/pattern3.png'),
] as const;
const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2 | 3;
}

const Container = ({children, footer, pattern}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="background">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}>
            <Image
              source={asset}
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
            source={asset}
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
          backgroundColor="background"
          justifyContent="center"
          padding="xl">
          {children}
        </Box>
        <Box backgroundColor="secondary" paddingTop="xl" paddingBottom="xl">
          {footer}
        </Box>
        <Box height={insets.bottom} />
      </Box>
    </KeyboardAwareScrollView>
  );
};
export default Container;
