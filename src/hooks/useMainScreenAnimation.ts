import {
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";
import { ANIMATION, EntryPoint } from "../constants/animation";
import { useDrawer } from "../context/DrawerContext";

const TIMING_CONFIG: WithTimingConfig = {
  duration: ANIMATION.DURATION,
};

export const useMainScreenAnimation = (entryPoint: EntryPoint) => {
  const { isOpen } = useDrawer();

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";

    // Calculate rotation only for TAB entry point
    const rotation =
      entryPoint === EntryPoint.TAB
        ? withTiming(isOpen ? "-10deg" : "0deg", TIMING_CONFIG)
        : "0deg";

    // Calculate translations
    const translateX = withTiming(
      isOpen ? ANIMATION.TRANSLATE_X_VALUE[entryPoint] : 0,
      TIMING_CONFIG
    );

    const translateY = withTiming(
      isOpen ? ANIMATION.TRANSLATE_Y_VALUE[entryPoint] : 0,
      TIMING_CONFIG
    );

    return {
      transform: [{ rotate: rotation }, { translateX }, { translateY }],
    };
  });

  return {
    animatedStyle,
    isOpen,
  };
};
