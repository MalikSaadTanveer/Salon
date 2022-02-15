import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import {
    More,
    Pricing,
    MapLocations,
    WorkingHours,
    ContactUs,
    PrivacyPolicy,
} from '../Screens'

const MoreStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen  name = {navigationString.MoreScreen} component={More}   />
            <Stack.Screen  name = {navigationString.Pricing} component={Pricing}   />
            <Stack.Screen  name = {navigationString.MapLocations} component={MapLocations}   />
            <Stack.Screen  name = {navigationString.WorkingHours} component={WorkingHours}   />
            <Stack.Screen  name = {navigationString.ContactUs} component={ContactUs}   />
            <Stack.Screen  name = {navigationString.PrivacyPolicy} component={PrivacyPolicy}   />
        
        </Stack.Navigator>
    );
};


export default MoreStack;
