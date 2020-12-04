import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/About';
import {Image} from 'react-native';
const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='About'
      component={About}
      options = { ({ navigation }) => {
        return {
          headerTitle: () => <Header title='About' navigation={navigation} />,
          headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:70}}/>,
        }
      }}
    />
  </Navigator>
);

export default AboutStack;