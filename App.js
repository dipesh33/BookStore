import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Provider from './src/navigation';
export default class App extends Component {
  render() {
    return (
      <Provider />
    );
  }
}
