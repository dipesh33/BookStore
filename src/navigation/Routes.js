import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStackNavigation from './AuthStackNavigation';
import BottomTab from './BottomTab';

const Routes = () => {
  const {isUser, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {setInitializing(false);}
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {isUser ? <BottomTab /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
