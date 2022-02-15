import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationString from '../constants/navigationString';
import MoreStack from './MoreStack';
import TabRoutes from './TabRoutes';
import {
    Pricing,
    MapLocations,
    WorkingHours,
    ContactUs,
    PrivacyPolicy,
} from '../Screens'
const MainStack = (Stack) => {

    return (
        <>
        <Stack.Screen name = {navigationString.Tabs} component={TabRoutes}/>
        </>
        
    );
};

export default MainStack;
