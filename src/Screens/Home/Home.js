//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,LogBox   } from 'react-native';
import BarbersComp from '../../Components/BarbersComp';
import { ImageSlider, ProfAreaContainerHome } from '../../Components/ComponentItems';
import PlainLayout from '../../Components/PlainLayout';
import colors from '../../utils/colors';

const Home = ({navigation}) => {
    const [images, setImages] = useState([
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
        'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    ])
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
    return (
    <PlainLayout showLoader={false}>
      
      <ProfAreaContainerHome navigation={navigation} />
      {/* <BarbersComp/> */}

      <View style={homescreenStyles.slider}>
      <Text style={homescreenStyles.sliderLeft}>
            Offers
        </Text>
        <Text style={homescreenStyles.sliderRight}>
            View More
        </Text>
      </View> 

      <ImageSlider empty={true} data={images} />
    </PlainLayout>
    );
};

const homescreenStyles = StyleSheet.create({
  view: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  collapseView: {
    padding: 20,
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatContainerFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        
        borderWidth: 1,
        borderColor: colors.lightGrey,
        elevation: 4,
      },
    }),
    paddingTop: 10,
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
  slider:{flexDirection:'row', justifyContent:'space-between'},
  sliderLeft:{ color:'#e8bf61', fontSize:12, fontStyle:'italic', marginHorizontal:7 },
  sliderRight:{ color:'#e8bf61', fontSize:12, fontStyle:'italic', marginHorizontal:7 }
});

//make this component available to the app
export default Home;
