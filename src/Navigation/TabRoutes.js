import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Home,
    Service,
    Barbers,
    More,
} from '../Screens'
import navigationString from '../constants/navigationString';

const TabRoutes = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
        screenOptions={{headerShown:false,
        
        }} >
            <Tab.Screen name = {navigationString.Home} component = {Home} />
            <Tab.Screen name = {navigationString.Service} component = {Service} />
            <Tab.Screen name = {navigationString.Barbers} component = {Barbers} />
            <Tab.Screen name = {navigationString.More} component = {More} />
        </Tab.Navigator>
    );
};

export default TabRoutes;
