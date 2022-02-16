//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BarbersComp from '../../Components/BarbersComp';
// create a component
const Barbers = () => {
    return (
        <View style={styles.container}>
            <BarbersComp/>
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
export default Barbers;
