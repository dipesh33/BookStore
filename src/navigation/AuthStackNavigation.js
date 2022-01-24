import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Login from '../screens/authentication/Login';
import SignUp from '../screens/authentication/SignUp';
import SplashScreen from '../screens/authentication/SplashScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const AuthenticationStack = createStackNavigator();

export const AuthStackNavigation = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '102318937035-tee0hj3tcfau5vehbai49rpvfreihu4l.apps.googleusercontent.com',
    });

  }, []);
  return (
    <AuthenticationStack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen
        name={'SplashScreen'}
        component={SplashScreen}
      />
      <AuthenticationStack.Screen name={'Login'} component={Login} />
      <AuthenticationStack.Screen name={'Signup'} component={SignUp} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthStackNavigation;
