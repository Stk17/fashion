import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import {Box, Text} from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({title, left, right, dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  return (
    <Box
      flexDirection="row"
      style={{marginTop: insets.top}}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m">
      <RoundedIconButton
        name={left.icon}
        size={44}
        iconRatio={0.4}
        onPress={left.onPress}
        {...{color, backgroundColor}}
      />
      <Text variant="header" {...{color}}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={44}
        iconRatio={0.4}
        name={right.icon}
        {...{color, backgroundColor}}
        onPress={right.onPress}
      />
    </Box>
  );
};
Header.defaultProps = {
  dark: false,
};
export default Header;
