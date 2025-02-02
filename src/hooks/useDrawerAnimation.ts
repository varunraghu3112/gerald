import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {ANIMATION, EntryPoint} from '../constants/animation';
import {useDrawer} from '../context/DrawerContext';

export const useDrawerAnimation = (entryPoint: EntryPoint) => {
  const {isOpen} = useDrawer();

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';

    const rotation = (() => {
      'worklet';
      if (entryPoint !== EntryPoint.TAB) {
        return '0deg';
      }
      return withTiming(isOpen ? '-10deg' : '0deg', {
        duration: ANIMATION.DURATION,
      });
    })();

    const translateX = (() => {
      'worklet';
      return withTiming(isOpen ? ANIMATION.TRANSLATE_X_VALUE[entryPoint] : 0, {
        duration: ANIMATION.DURATION,
      });
    })();

    const translateY = (() => {
      'worklet';
      return withTiming(isOpen ? ANIMATION.TRANSLATE_Y_VALUE[entryPoint] : 0, {
        duration: ANIMATION.DURATION,
      });
    })();

    return {
      transform: [{rotate: rotation}, {translateX}, {translateY}],
    };
  });

  return {
    animatedStyle,
    isOpen,
  };
};
