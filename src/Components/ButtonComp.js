import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../utils/colors';

const ButtonComp = ({btnText,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.txt} >{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = ScaledSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'42@s',
        
        width:'90%',
        backgroundColor: colors.primary,
        borderRadius:6,
        elevation:10,
        marginTop:'10@s',
    },
    txt:{
        fontSize: '16@s',
        color:'white'
    }
});

export default ButtonComp;
