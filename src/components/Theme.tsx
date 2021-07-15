import {createText, createBox, useTheme as useReTheme} from '@shopify/restyle';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
export const theme = {
  colors: {
    primary: '#2CB9B0',
    secondary: '#0C0D34',
    text: 'rgba(12,13,52,0.7)',
    white: 'white',
    grey: '#F4F0EF',
    darkGrey: '#8A8D90',
    danger: '#FF0058',
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
      fontSize: 24,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    body: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'SFProDisplay-Regular',
      text: 'rgba(12,13,52,0.7)',
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: 'text',
      textAlign: 'center',
    },
  },
  breakpoints: {},
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
