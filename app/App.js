import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {BottomMenu} from './src/components/BottomMenu/BottomMenu';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomMenu />
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
