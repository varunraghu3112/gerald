import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../colors';
import {useDrawer} from '../../context/DrawerContext';

type RootStackParamList = {
  Home: {screen?: string} | undefined;
  Start: undefined;
  Favourites: undefined;
  Contact: undefined;
  Cart: undefined;
};

type DrawerItemProps = {
  label: string;
  screenName: keyof RootStackParamList;
  params?: any;
  selectedName?: string;
};

function DrawerItem({
  label,
  screenName,
  params,
  selectedName,
}: DrawerItemProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {closeDrawer} = useDrawer();

  const isSelected =
    selectedName === screenName || selectedName === params?.screen;

  const handlePress = () => {
    navigation.navigate(screenName, params);
    closeDrawer();
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View
        style={[
          styles.itemContainer,
          isSelected && styles.selectedItemContainer,
        ]}>
        <Text style={[styles.label, isSelected && styles.selectedLabel]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    backgroundColor: COLORS.BACKGROUND.TRANSPARENT,
    padding: 16,
    width: '70%',
    borderRadius: 10,
  },
  selectedItemContainer: {
    backgroundColor: COLORS.BACKGROUND.SELECTED,
  },
  label: {
    color: COLORS.TEXT.TERTIARY,
    fontSize: 16,
    fontWeight: '600',
  },
  selectedLabel: {
    color: COLORS.TEXT.SELECTED,
  },
});

export default DrawerItem;
