import React from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useDrawer} from '../context/DrawerContext';

export const useRotationAnimation = () => {
  const rotateValue = useSharedValue(0);
  const {isOpen} = useDrawer();

  React.useEffect(() => {
    if (isOpen) {
      rotateValue.value = withDelay(
        500,
        withTiming(-30, {
          duration: 500,
        }),
      );
    } else {
      rotateValue.value = withTiming(0, {
        duration: 500,
      });
    }
  }, [isOpen, rotateValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotateValue.value}deg`,
        },
      ],
    };
  });

  return {
    animatedStyle,
    isOpen,
  };
};
