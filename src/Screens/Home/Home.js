//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox } from 'react-native';
import BarbersComp from '../../Components/BarbersComp';
import { ImageSlider, ProfAreaContainerHome } from '../../Components/ComponentItems';
import PlainLayout from '../../Components/PlainLayout';
import colors from '../../utils/colors';

const Home = ({ navigation }) => {
  
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <PlainLayout showLoader={false}> 
      <ProfAreaContainerHome navigation={navigation} />
    </PlainLayout>
  );
};


export default Home;
