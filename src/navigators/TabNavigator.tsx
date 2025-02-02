import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { COLORS } from "../colors";
import { ANIMATION, EntryPoint } from "../constants/animation";
import { ROUTES } from "../constants/routes";
import { useDrawer } from "../context/DrawerContext";
import { useMainScreenAnimation } from "../hooks/useMainScreenAnimation";
import Contact from "../screens/Contact/Contact";
import YourCart from "../screens/Home/YourCart";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

const COMMON_STYLE = {
  borderTopLeftRadius: ANIMATION.BORDER_RADIUS,
  overflow: "hidden" as const,
  elevation: 8,
  shadowColor: COLORS.SHADOW.DEFAULT,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};

const HeaderLeft = () => {
  const { toggleDrawer } = useDrawer();
  return (
    <TouchableOpacity style={styles.menuContainer} onPress={toggleDrawer}>
      <View style={styles.menuButton}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </View>
    </TouchableOpacity>
  );
};

const renderHeaderLeft = () => <HeaderLeft />;

function TabNavigator() {
  const { animatedStyle } = useMainScreenAnimation(EntryPoint.TAB);
  const { isOpen, closeDrawer } = useDrawer();

  const handlePress = () => {
    if (isOpen) {
      closeDrawer();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <View style={styles.paddingView} />

        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerLeft: renderHeaderLeft,
            tabBarStyle: {
              backgroundColor: COLORS.BACKGROUND.PRIMARY,
            },
            headerStyle: {
              backgroundColor: COLORS.BACKGROUND.PRIMARY,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        >
          <Tab.Screen
            name={ROUTES.TAB.HOME}
            component={HomeStackNavigator}
            options={{
              title: "Home",
            }}
          />
          <Tab.Screen
            name={ROUTES.TAB.CONTACT}
            component={Contact}
            options={{
              title: "Contact",
            }}
          />
          <Tab.Screen
            name={ROUTES.TAB.CART}
            component={YourCart}
            options={{
              title: "Cart",
            }}
          />
        </Tab.Navigator>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.PRIMARY,
    ...COMMON_STYLE,
  },
  menuContainer: {
    marginLeft: 16,
  },
  menuButton: {
    padding: 8,
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: COLORS.MENU.LINES,
    marginVertical: 2,
    borderRadius: 1,
  },
  paddingView: {
    padding: 30,
  },
});

export default TabNavigator;
