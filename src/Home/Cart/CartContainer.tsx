import React, {FC, ReactNode} from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Box, useTheme} from '../../components';
import {clamp, snapPoint} from 'react-native-redash';
import {Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');
const aspectRatio = width / 375;
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];
interface CartProps {
  children: ReactNode;
  CheckoutComponent: FC<{minHeight: number}>;
}
const Cart = ({children, CheckoutComponent}: CartProps) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {y: number}
  >({
    onStart: (event, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({translationY}, ctx) => {
      translateY.value = clamp(
        ctx.y + translationY,
        snapPoints[0],
        snapPoints[1],
      );
    },
    onEnd: ({velocityY}) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, {overshootClamping: true});
    },
  });
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <Box flex={1}>
      <CheckoutComponent minHeight={minHeight} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: 'white',
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
            style,
          ]}>
          {children}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'flex-end',
              height: theme.borderRadii.xl,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 5 * aspectRatio,
                backgroundColor: theme.colors.background2,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginBottom: theme.spacing.m,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;