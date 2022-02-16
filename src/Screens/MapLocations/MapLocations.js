import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectLocationScreen from '../../Components/SelectLocationScreen';
const MapLocations = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <SelectLocationScreen navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
});

export default MapLocations;
