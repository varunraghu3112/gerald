import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS } from "../../colors";
import { ANIMATION, EntryPoint } from "../../constants/animation";
import { useMainScreenAnimation } from "../../hooks/useMainScreenAnimation";
import DrawerContent from "./DrawerContent";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.7;

function InHouseDrawer() {
  const { animatedStyle } = useMainScreenAnimation(EntryPoint.DRAWER);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.content}>
        <DrawerContent />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.BACKGROUND.DRAWER,
    borderTopLeftRadius: ANIMATION.BORDER_RADIUS,
  },
  content: {
    width: DRAWER_WIDTH,
    height: "100%",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export default InHouseDrawer;
