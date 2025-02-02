import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import InHouseDrawer from "../components/InHouseDrawer";
import TabNavigator from "./TabNavigator";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.7;

function RootLayout() {
  return (
    <View style={styles.container}>
      <InHouseDrawer />
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: "#2c3e50",
    zIndex: 1,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
});

export default RootLayout;
