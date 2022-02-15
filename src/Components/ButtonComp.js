import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const ButtonComp = ({btnText,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.txt} >{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:42,
        backgroundColor: '#D9534F',
        borderRadius:8
    },
    txt:{
        fontSize:16,
        color:'white'
    }
});

export default ButtonComp;
