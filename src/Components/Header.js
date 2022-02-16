//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors';

// create a component
const MyComponent = ({text,onPress}) => {
    return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} onPress={onPress}>
                    <Ionicons name="arrow-back-circle-outline" style={styles.headerLeftInner} />
                </TouchableOpacity>
                <Text style={styles.headerRight}>
                    {text}
                </Text>

            </View>       
    );
};


const styles = ScaledSheet.create({
   
    header:{ 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center', 
        paddingHorizontal: '16@s',
        paddingVertical:'10@s',
        position:'relative', 

    },
    headerLeft:{ position: 'absolute',left: '16@s',top:'16@s'},
    headerLeftInner:{color:colors.primary,fontSize: '36@s',},
    headerRight:{ color: 'white',fontSize:"28@s" },
});


export default MyComponent;
