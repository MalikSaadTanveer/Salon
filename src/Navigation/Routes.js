import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';

const Routes = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}} >
               
                {MainStack(Stack)}

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;
