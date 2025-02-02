import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../colors";
import { ROUTES } from "../../constants/routes";

type RootStackParamList = {
  [ROUTES.HOME_STACK.Start]: undefined;
  [ROUTES.HOME_STACK.Favourites]: undefined;
  [ROUTES.TAB.CART]: undefined;
};

function Start() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BEKA</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.HOME_STACK.Favourites)}
        >
          <Text style={styles.buttonText}>Go to Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.TAB.CART)}
        >
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND.PRIMARY,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.TEXT.PRIMARY,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 20,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Start;
