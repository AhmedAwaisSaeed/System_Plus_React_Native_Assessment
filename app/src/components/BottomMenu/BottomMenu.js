import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import {Listings} from '../../design/Listings';
import {Calendar} from '../../design/Calendar';
import {useSafeArea} from 'react-native-safe-area-context';
import {View} from 'react-native';

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator
        tabBar={BottomTabBarProps => <TabBar {...BottomTabBarProps} />}>
        <Tab.Screen name="Listings" component={Listings} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: 'white',
          }}
        />
      )}
    </View>
  );
};
