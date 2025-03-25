import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from '../assets/globalStyles';

export default function LogoLogin() {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/images/AutoFridge.png')}  
        style={globalStyles.logo}
      />
    </View>
  );
}
