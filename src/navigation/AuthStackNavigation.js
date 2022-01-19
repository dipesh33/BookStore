import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from '../screens/authentication/Login';
import SignUp from '../screens/authentication/SignUp';
import SplashScreen from '../screens/authentication/SplashScreen';

const AuthenticationStack = createStackNavigator();

export class AuthStackNavigation extends Component {
    render() {
        return (
            <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
                <AuthenticationStack.Screen name={'SplashScreen'} component={SplashScreen}/>
                <AuthenticationStack.Screen name={'Login'} component={Login}/>
                <AuthenticationStack.Screen name={'Signup'} component={SignUp}/>
            </AuthenticationStack.Navigator>
        );
    }
}

export default AuthStackNavigation;
