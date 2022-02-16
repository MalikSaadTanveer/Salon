//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    PixelRatio,
    Dimensions
} from 'react-native';

// create a component
const { width: screenWidth } = Dimensions.get('window');
const BarbersComp = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerLeft} >
                    Barbers
                </Text>
                <Text onPress={() => { props.navigation.navigate('ServiceScreen') }} style={styles.headerRight}>
                    View More
                </Text>
            </View>
            <View>
                {/* <ScrollView > */}
                <View style={styles.mainContainer}>

                    <FlatList 
                        data={[
                            { key: 1, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 2, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 3, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 4, name: 'MIke West', src: '../../assets/waxing.png' },
                            { key: 5, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 6, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 7, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 8, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 9, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 10, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 11, name: 'MIke West', src: '../../assets/waxing.png' }, { key: 12, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 13, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 14, name: 'MIke West', src: '../../assets/waxing.png' },
                            { key: 15, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 16, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 17, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 18, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 19, name: 'MIke West', src: '../../assets/waxing.png' }, { key: 20, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 21, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 22, name: 'Mike West', src: '../../assets/waxing.png' },
                            { key: 23, name: 'Mike West', src: '../../assets/waxing.png' }, { key: 24, name: 'Mike West', src: '../../assets/waxing.png' }
                        ]}
                        renderItem={({ item }) =>
                            <View style={{ width: '30%',margin:6 }}>
                                <TouchableOpacity onPress={() => { }} key={item.key}>
                                    <Image source={require('../../assets/waxing1.png')} style={styles.mainContainerImage} />
                                    <View>
                                        <Text style={styles.mainContainerT1}> {item.name} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>}
                        numColumns={3}
                    />

                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    header:{ flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingHorizontal: 16,paddingVertical:10 },
    headerLeft:{ color: 'white', fontSize: 18,  },
    headerRight:{ color: '#D9534F', fontSize: 12, fontStyle: 'italic', marginTop: 6 },
    mainContainer:{ flex: 1,margin:10 },
    mainContainerImage:{ width: '100%', height: PixelRatio.roundToNearestPixel((screenWidth * 24) / 100), borderRadius: 10 / 2, borderWidth: 0.5, borderColor: '#C0C0C0' },
    mainContainerT1:{ textAlign: 'center', marginTop: 5, fontSize: 12, color: 'white' },
});

//make this component available to the app
export default BarbersComp;
