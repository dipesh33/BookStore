import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

export default function AppStack() {
  return (
      <appStack.Navigator screenOptions={{headerShown: false}}>
          
      </appStack.Navigator>
  );
}
