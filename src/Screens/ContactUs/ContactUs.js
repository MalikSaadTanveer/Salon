import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import ContactComp from '../../Components/ContactComp';
const ContactUs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ContactComp navigation={navigation} />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000000',
    },
});

export default ContactUs;
