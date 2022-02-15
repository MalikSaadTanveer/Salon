import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapLocations = () => {
    return (
        <View style={styles.container}>
            <Text>MapLocations</Text>
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
