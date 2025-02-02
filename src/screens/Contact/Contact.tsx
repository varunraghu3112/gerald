import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../colors";

const CONTACT_INFO = {
  phone: "+1 999-999-9999",
  email: "hello@beka.com",
  address: "Banglore, India",
};

function Contact() {
  const handlePhonePress = () => {
    Linking.openURL(`tel:${CONTACT_INFO.phone}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Need Help?</Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.contactText}>📞 {CONTACT_INFO.phone}</Text>
        </TouchableOpacity>
        <Text style={styles.contactText}>✉️ {CONTACT_INFO.email}</Text>
        <Text style={styles.addressText}>📍 {CONTACT_INFO.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.BACKGROUND.PRIMARY,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: COLORS.SHADOW.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.TEXT.PRIMARY,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 18,
    color: COLORS.TEXT.PRIMARY,
    marginBottom: 12,
  },
  addressText: {
    fontSize: 16,
    color: COLORS.TEXT.TERTIARY,
    textAlign: "center",
    marginBottom: 20,
  },
  cartButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  cartButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Contact;
