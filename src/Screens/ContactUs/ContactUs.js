import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Text>ContactUs</Text>
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

export default ContactUs;
