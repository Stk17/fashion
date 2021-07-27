import React, {ReactNode} from 'react';
import {
  ThemeProvider as ReStyleThemeProvider,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';

import {ViewStyle, TextStyle, ImageStyle, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const aspectRatio = width / 375;
export const palette = {
  white: 'white',
  orange: '#FE5E33',
  yellow: '#FFC641',
  pink: '#FF87A2',
  green: '#2CB9B0',
  lightBlue: '#BFEAF5',
  violet: '#442CB9',
};
const theme = {
  aspectRatio: width / 375,
  colors: {
    primary: palette.green,
    primaryLight: '#E7F9F7',
    secondary: '#0C0D34',
    danger: '#FF0058',
    info: '#808080',
    edit: palette.lightBlue,
    text: 'rgba(12,13,52,0.7)',
    textContrast: palette.white,
    background: palette.white,
    background2: '#F4F0EF',
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
    violet: '#442CB9',
    lightBlue: '#BFEAF5',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProDisplay-Bold',
      color: 'White',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title3: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      //lineHeight: 24,
      fontFamily: 'SFProDisplay-Medium',
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>;
};
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();
//export default theme;

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
