import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationString from '../constants/navigationString';
import MoreStack from './MoreStack';
import TabRoutes from './TabRoutes';


const MainStack = (Stack) => {

    return (
        <>
        <Stack.Screen 
            name = {navigationString.Tabs} component={TabRoutes}
        />
        <Stack.Screen name = {navigationString.MoreStack} component={MoreStack}/>
        </>
        
    );
};

export default MainStack;
