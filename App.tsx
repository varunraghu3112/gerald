/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DrawerProvider} from './src/context/DrawerContext';
import RootLayout from './src/navigators/RootLayout';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <DrawerProvider>
        <NavigationContainer>
          <RootLayout />
        </NavigationContainer>
      </DrawerProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
});

export default App;
