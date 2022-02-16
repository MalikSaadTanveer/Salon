//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../utils/colors';
import ButtonComp from './ButtonComp';
import Header from './Header'

// create a component
const ContactComp = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true} style={{backgroundColor:colors.black}}>
            <View style={styles.container}>
                <Header text="Contact Us" onPress={() => navigation.goBack()} />
                <View style={styles.mainContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Name"
                        placeholderTextColor='#cbced4'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor='#cbced4'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        placeholderTextColor='#cbced4'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Description"
                        placeholderTextColor='#cbced4'
                        multiline={true}
                        numberOfLines={5}
                        textAlignVertical='top'
                    />

                </View>
                <ButtonComp btnText="Submit" onPress={() => navigation.goBack()} />

            </View>
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    mainContainer: {
        position: 'relative',
        width: '100%',
        marginTop: '40@s',
        paddingHorizontal: '16@s'
    },
    textInput: {
        backgroundColor: '#f8f8f8',
        color: 'black',
        width: '100%',
        padding: '6@s',
        borderRadius: '4@s',
        paddingLeft: '10@s',
        fontSize: '16@s',
        marginTop: '20@s'
    },
});

//make this component available to the app
export default ContactComp;
