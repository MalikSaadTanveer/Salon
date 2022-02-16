//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../utils/colors';
import Header from './Header'

const PrivacyComp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header text="Privacy Policy" onPress={() => navigation.goBack()} />
            <View style={styles.mainContainer}>
                <Text style={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium facere ratione aspernatur possimus corporis alias debitis eos deleniti esse veniam. Iure dolor labore porro, doloremque optio amet vero vitae repellendus, molestias sed fugit! Debitis illum eius eveniet quia culpa, aliquam esse! Esse iure laudantium nobis illum earum, voluptates pariatur distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequatur, voluptate nam vitae dignissimos molestiae harum ipsa velit error placeat quo cupiditate veniam aut dicta recusandae sunt doloribus, excepturi impedit?
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    mainContainer: {
        position: 'relative',
        width: '100%',
        marginTop: '40@s',
        paddingHorizontal: '16@s'
    },
    text:{
        fontSize: '16@s'
    }
});

//make this component available to the app
export default PrivacyComp;
