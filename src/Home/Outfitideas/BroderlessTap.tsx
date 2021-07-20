import React, {ReactNode} from 'react';
import Animated, {
  clockRunning,
  not,
  startClock,
  stopClock,
  useCode,
  eq,
  cond,
  call,
  greaterThan,
  and,
  set,
  neq,
  add,
} from 'react-native-reanimated';
import {useTapGestureHandler, useClock, useValue} from 'react-native-redash';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

interface BorderTapProps {
  onPress: () => void;
  children: ReactNode;
}
const BorderTap = ({children, onPress}: BorderTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  const {gestureHandler, state} = useTapGestureHandler();
  const opacity = useValue(0);

  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), [stopClock(clock)]),
      cond(eq(state, State.END), [call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1,
        ),
      ),
    ],
    [],
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{opacity}}> {children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderTap;
