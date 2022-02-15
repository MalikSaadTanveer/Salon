import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
    Home,
    Service,
    Barbers,
    More,
} from '../Screens'
import navigationString from '../constants/navigationString';
import MoreStack from './MoreStack';

const TabRoutes = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
        screenOptions={{headerShown:false,
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'black',
        tabBarStyle:{
            backgroundColor:'#D9534F'
        }
        
        }} >
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return <AntDesign name = "home"  color={focused?'white':'black'} size={25}/>
                }
            }}
            name = {navigationString.Home} component = {Home} />
            
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return <AntDesign name = "customerservice" color={focused?'white':'black'} size={25}/>
                }
            }}
            name = {navigationString.Service} component = {Service} />
            
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return <AntDesign name = "home"  color={focused?'white':'black'} size={25}/>
                }
            }}
            name = {navigationString.Barbers} component = {Barbers} />
            
            <Tab.Screen options={{
                tabBarIcon:({focused})=>{
                    return <AntDesign name = "home"  color={focused?'white':'black'} size={25}/>
                }
            }}
            name = {navigationString.MoreStack} component = {MoreStack} />
        </Tab.Navigator>
    );
};

export default TabRoutes;
