import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import {Box, Text} from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({title, left, right, dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'background' : 'secondary';

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
        align={'center'}
        {...{color}}
      />
      <Text variant="header" {...{color}}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={right.icon}
          {...{color}}
          align={'center'}
          onPress={right.onPress}
        />
      ) : (
        <View style={{width: 44}} />
      )}
    </Box>
  );
};
Header.defaultProps = {
  dark: false,
};
export default Header;
