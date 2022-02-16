import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, PixelRatio, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors';
import Header from '../Components/Header'


const { width: screenWidth } = Dimensions.get('window');
const PricingComp = ({ navigation }) => {
    const data = [
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$50',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$15',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$20',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
        {
            name: 'Mike West',
            work: 'Hair Style',
            price: '$10',
        },
    ]

    return (
        <View style={styles.container}>
            <Header  text="Pricing" onPress={()=>{navigation.goBack()}}/>
            <ScrollView 
                style={styles.mainContainer}
            >
                {
                    data.map((item, i) => {
                        return (
                            <TouchableOpacity onPress={() => { }} key={i} style={styles.mainContainerInner}>
                                {/* <Image source={require('../../assets/avatar2.png')} style={styles.mainContainerImage} /> */}
                                <View  style={{marginVertical:3}} >
                                    <Text style={styles.mainContainerT1}>{item.name}</Text>
                                    <Text style={styles.mainContainerT2}>{item.work}</Text>
                                </View>
                                    <Text style={styles.mainContainerT3}>{item.price}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    );
};


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    header:{ 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center', 
        paddingHorizontal: 16,
        paddingVertical:10,
        position:'relative', 

    },
    headerLeft:{ position: 'absolute',left: 16,top:16},
    headerLeftInner:{color:colors.primary,fontSize: '36@s',},
    headerRight:{ color: 'white',fontSize:"28@s" },
    mainContainer:{ paddingHorizontal: 16 ,width:'100%',marginTop:'20@s'},
    mainContainerInner:{flexDirection: 'row',justifyContent:'space-between', alignItems: 'center',width: '100%',borderWidth: 2, borderBottomColor: '#D9534F',},
    mainContainerImage:{  width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: 8, borderWidth: 2, borderColor: '#fa7c8a', marginVertical: 3 },
    mainContainerT1:{ textAlign: 'center', fontSize: 16, color: 'white' },
    mainContainerT2:{ textAlign: 'center', fontSize: 14, color: 'lightgrey' },
    mainContainerT3:{ textAlign: 'center', fontSize: 20, color: '#D9534F' },

});

//make this component available to the app
export default PricingComp 
