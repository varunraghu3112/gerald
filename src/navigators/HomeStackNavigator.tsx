import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Favourites from "../screens/Home/Favourites";
import Start from "../screens/Home/Start";

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <HomeStack.Screen name="Start" component={Start} />
      <HomeStack.Screen name="Favourites" component={Favourites} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
