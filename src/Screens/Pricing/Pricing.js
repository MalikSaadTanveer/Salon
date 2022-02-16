//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PricingComp from '../../Components/PricingComp'
// create a component
const Pricing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PricingComp navigation={navigation}/>
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
export default Pricing;
