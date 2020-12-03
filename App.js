import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {  Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/Home';
import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack';
import AppNavigator from './routes/drawer';

const getFonts = ()=> Font.loadAsync({
  'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf') ,
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <AppNavigator/>
    );
  }
  else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
      />
    )
  }
  
}

