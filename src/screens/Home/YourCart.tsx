import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../colors';

const DUMMY_CART_ITEMS = [
  {id: '1', name: 'Item 1', price: '$19.99'},
  {id: '2', name: 'Item 2', price: '$29.99'},
  {id: '3', name: 'Item 3', price: '$39.99'},
  {id: '4', name: 'Item 4', price: '$49.99'},
  {id: '5', name: 'Item 5', price: '$59.99'},
];

function YourCart() {
  const renderItem = ({item}: {item: (typeof DUMMY_CART_ITEMS)[0]}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_CART_ITEMS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.PRIMARY,
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    color: COLORS.TEXT.PRIMARY,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    color: COLORS.TEXT.SELECTED,
    fontWeight: '600',
  },
});

export default YourCart;
