import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './AppStack';
import {AuthProvider} from './AuthProvider';
import BottomTab from './BottomTab';
import Routes from './Routes';

const Provider = () => {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
};

export default Provider;
