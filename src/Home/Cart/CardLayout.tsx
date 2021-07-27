import React, {ReactNode} from 'react';
import {Box} from '../../components';
import {Theme} from '../../components/Theme';
import {BoxProps} from '@shopify/restyle';
import {BorderlessButton} from 'react-native-gesture-handler';

export const CARD_HEIGHT = 160;
interface CardProps {
  children: ReactNode;
  backgroundColor: BoxProps<Theme>['backgroundColor'];
  onPress: () => void;
}

const CardLayout = ({children, onPress, backgroundColor}: CardProps) => {
  return (
    <BorderlessButton onPress={onPress}>
      <Box
        padding="m"
        marginLeft="m"
        borderRadius="m"
        width={120}
        height={CARD_HEIGHT}
        backgroundColor={backgroundColor}>
        {children}
      </Box>
    </BorderlessButton>
  );
};

export default CardLayout;
