import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../colors";

const DUMMY_FAVORITES = [
  { id: "1", name: "Item 1", price: "$19.99" },
  { id: "2", name: "Item 2", price: "$29.99" },
  { id: "3", name: "Item 3", price: "$39.99" },
];

function Favourites() {
  const renderItem = ({ item }: { item: (typeof DUMMY_FAVORITES)[0] }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favourites</Text>
      <FlatList
        data={DUMMY_FAVORITES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.PRIMARY,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.TEXT.PRIMARY,
    marginBottom: 20,
  },
  listContainer: {
    gap: 15,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    padding: 15,
    borderRadius: 10,
    shadowColor: COLORS.SHADOW.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.TEXT.PRIMARY,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: COLORS.TEXT.TERTIARY,
  },
  addButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Favourites;
