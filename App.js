import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AuthStackNavigation/>
      </NavigationContainer>
    );
  }
}
