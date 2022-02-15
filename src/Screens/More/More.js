import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../constants/navigationString';

const More = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ButtonComp btnText={navigationString.Pricing} onPress={()=>navigation.navigate(navigationString.Pricing)} />
            <ButtonComp btnText={navigationString.MapLocations} onPress={()=>navigation.navigate(navigationString.MapLocations)} />
            <ButtonComp btnText={navigationString.WorkingHours} onPress={()=>navigation.navigate(navigationString.WorkingHours)} />
            <ButtonComp btnText={navigationString.ContactUs} onPress={()=>navigation.navigate(navigationString.ContactUs)} />
            <ButtonComp btnText={navigationString.PrivacyPolicy} onPress={()=>navigation.navigate(navigationString.PrivacyPolicy)} />
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

export default More;
