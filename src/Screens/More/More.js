import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../constants/navigationString';

const More = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ButtonComp btnText={navigationString.Pricing} onPress={()=>navigation.navigate(navigationString.Pricing)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default More;
