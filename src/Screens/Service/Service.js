//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ServicesSlider from '../../Components/ServicesSlider';
// create a component
const Service = () => {
    return (
        <View style={styles.container}>
            <ServicesSlider/>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000000',
    },
});

//make this component available to the app
export default Service;
