import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResNetSignInScreen from '../screens/ResNetSignInScreen';
import LoginLBPScreen from '../screens/LoginLBPScreen';


const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} initialRouteName="Reconnaissance faciale">
                <Stack.Screen name="Reconnaissance faciale" component={WelcomeScreen} />
                {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
                <Stack.Screen name="Inscription" component={SignUpScreen} />
                {/*<Stack.Screen name="Connexion avec ResNet" component={ResNetLoginScreen} />*/}
                <Stack.Screen name="Connexion avec ResNet" component={ResNetSignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;