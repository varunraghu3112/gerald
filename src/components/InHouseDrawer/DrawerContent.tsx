import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../colors';
import {ROUTES} from '../../constants/routes';
import {useCurrentRoute} from '../../hooks/useCurrentRoute';
import DrawerItem from './DrawerItem';

function DrawerContent() {
  const currentRoute = useCurrentRoute();

  const handleSignOut = () => {
    Alert.alert('Signout Called');
  };

  return (
    <>
      <Text style={styles.mainText}>BEKA</Text>
      <DrawerItem
        label="Home"
        screenName={ROUTES.TAB.HOME}
        params={{screen: ROUTES.HOME_STACK.Start}}
        selectedName={currentRoute || ROUTES.HOME_STACK.Start}
      />
      <DrawerItem
        label="Contact"
        screenName={ROUTES.TAB.CONTACT}
        selectedName={currentRoute}
      />
      <DrawerItem
        label="Favourites"
        screenName={ROUTES.TAB.HOME}
        params={{screen: ROUTES.HOME_STACK.Favourites}}
        selectedName={currentRoute}
      />
      <DrawerItem
        label="Cart"
        screenName={ROUTES.TAB.CART}
        selectedName={currentRoute}
      />
      <View style={styles.separator} />
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <View style={styles.extraSpace} />
    </>
  );
}

const styles = StyleSheet.create({
  mainText: {
    marginLeft: 60,
    marginBottom: 20,
    color: COLORS.TEXT.SECONDARY,
    fontSize: 24,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.TEXT.TERTIARY,
    opacity: 0.3,
    marginVertical: 20,
  },
  signOutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signOutText: {
    color: COLORS.TEXT.SECONDARY,
    fontSize: 16,
    fontWeight: '600',
  },
  extraSpace: {
    flex: 1,
  },
});

export default DrawerContent;
