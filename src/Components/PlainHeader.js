import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Alert,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from './ComponentItems';
import colors from '../utils/colors';
import {ScaledSheet} from 'react-native-size-matters'
import { SearchBar } from 'react-native-elements';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import { isEmpty, isLoaded } from 'react-redux-firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

// import Toast from 'react-native-toast-message';

const PlainHeader = (props) => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const bagData = useSelector((state) => state.orderStore);
  // const locationData = useSelector((state) => state.appStore);

  return (
    <>
      <View style={plainheaderStyles.container}>
        
            <View
              style={plainheaderStyles.containerInner}
            >
              <Avatar onPress={() => {}}
                source={require('../../assets/avatar1.png')}
              />
              <View >
                <Text style={plainheaderStyles.containerInnerLeft}>
                  Hey, <Text style={{color:colors.primary}} >Anney Deffy</Text>
                </Text>

                <TouchableOpacity onPress={()=>{}} >
                <View style={plainheaderStyles.innerLeftBelowContainer}>
                <Text style={plainheaderStyles.innerLeftBelow}>
                  Stockhalm Stad 
                </Text>
                  <TouchableOpacity>
                <Entypo
                      name="chevron-down"
                      style={plainheaderStyles.innerLeftDownIcon}
                    />
                    </TouchableOpacity>

                </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              
              <TouchableOpacity>
                 <Feather
                  name='bell'
                  style={plainheaderStyles.bellStyle}
                  onPress = {()=> {}}
                />
              </TouchableOpacity>
                
            </View>
          
      </View>
      
      
      <View style={plainheaderStyles.container}>
              <View style={plainheaderStyles.searchContainer}>
              <View style={plainheaderStyles.searchIconContainer}>
              <Feather
                  name='search'
                  style={plainheaderStyles.searchIcon}
                />
                </View>
              <TextInput
              style={plainheaderStyles.textInputStyle}
              placeholder="Search for hair, makeup and more"
              placeholderTextColor='#cbced4'
              />
              </View>

            <View>
              <TouchableOpacity  style={{marginTop:-3}} onPress={() => {}}> 
                 <MaterialCommunityIcons
                    name='shopping-outline'
                    style={plainheaderStyles.bagIcon}
                  />
                
              </TouchableOpacity>
            </View>
          
      </View>
      
      {props.titleOnly && !props.hideLine && (
        <HorizontalLine
          {...props.lineProps}
          primary={props.linePrimary}
          lineDouble={props.lineDouble}
          lineWhite={props.lineWhite}
        />
      )}
      {props.subHeader && (
        <View
          style={[
            props.subHeaderStyle
              ? props.subHeaderStyle
              : plainheaderStyles.subHeader,
            !props.hideSubheaderShadow && plainheaderStyles.subHeaderShadow,
            !props.noPadding && plainheaderStyles.subHeaderPadding,
          ]}
        >
          {props.subHeader}
        </View>
      )}
    </>
  );
};

const plainheaderStyles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
    height: '60@s',
    paddingLeft: "10@s",
    paddingRight: "10@s",
  },
  containerInner:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"10@s"
  },
  containerInnerLeft:{color:'white', fontSize:"16@s",fontStyle:'italic'},
  innerLeftBelowContainer:{display:'flex',flexDirection:'row'},
  innerLeftBelow:{color:colors.white, fontSize:"10@s",marginHorizontal:"7@s",marginTop:"5@s"},
  innerLeftDownIcon:{marginTop:4,color:colors.white,fontSize:'15@s'},
  bellStyle:{fontSize:"28@s", color:colors.white},
  searchContainer:{position:'relative',width:'85%'},
  searchIconContainer:{position:'absolute',zIndex:1,top:"6@s",left:"15@s"},
  searchIcon:{color:'#cbced4', fontSize:'20@s'},
  textInputStyle:{backgroundColor:'#f8f8f8',color:'black', width:'100%',marginLeft:"7@s",padding:"4@s",borderRadius:"6@s",paddingLeft:"35@s",fontSize:"13@s",},
  bagIcon:{color:colors.white,fontSize:"28@s"},
  titleOnly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundWhite,
    height: 55,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleOnlyHasBack: {
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 0.2,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 0.2,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
  },
  subHeaderPadding: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
  },
  subHeaderShadow: {
    zIndex: 9999,
    borderColor: colors.lightGrey,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
    }),
  },
});

export default PlainHeader;
