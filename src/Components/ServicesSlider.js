//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, PixelRatio, Dimensions } from 'react-native';

// create a component
const { width: screenWidth } = Dimensions.get('window');
const ServicesSlider = () => {
    const data = [
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
            <View style={styles.header}>
                <Text style={styles.headerLeft}>
                    Services
                </Text>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text style={styles.headerRight}>
                        View More
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                style={styles.mainContainer}
            >
                {
                    data.map((item, i) => {
                        return (
                            <TouchableOpacity onPress={() => { }} key={i} style={styles.mainContainerInner}>
                                <Image source={require('../../assets/avatar2.png')} style={styles.mainContainerImage} />
                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.mainContainerT1}>{item.name}</Text>
                                    <Text style={styles.mainContainerT2}>{item.work}</Text>
                                    <Text style={styles.mainContainerT3}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    header:{ 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 
        'space-between', 
        paddingHorizontal: 16,
        paddingVertical:10 
    },
    headerLeft:{ color: 'white',fontSize:18 },
    headerRight:{ color: '#D9534F', fontSize: 12, fontStyle: 'italic',marginTop:6 },
    mainContainer:{ paddingHorizontal: 16 ,width:'100%'},
    mainContainerInner:{flexDirection: 'row',alignItems: 'center',width: '100%',borderWidth: 2, borderBottomColor: '#D9534F',},
    mainContainerImage:{  width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: 8, borderWidth: 2, borderColor: '#fa7c8a', marginVertical: 3 },
    mainContainerT1:{ textAlign: 'center', fontSize: 14, color: 'white' },
    mainContainerT2:{ textAlign: 'center', fontSize: 12, color: 'lightgrey' },
    mainContainerT3:{ textAlign: 'center', fontSize: 10, color: '#D9534F' },

});

//make this component available to the app
export default ServicesSlider 
