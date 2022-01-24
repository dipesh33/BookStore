import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/app/Search';
import Dashboard from '../screens/app/Dashboard';
import Wishlist from '../screens/app/Wishlist';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name={'Dashboard'} component={Dashboard}/>
          <Tab.Screen name={'Search'} component={Search} />
          <Tab.Screen name={'Wishlist'} component={Wishlist} />
      </Tab.Navigator>
  );
};

export default BottomTab;
