import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/About';

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
          headerTitle: () => <Header title='About' navigation={navigation} />
        }
      }}
    />
  </Navigator>
);

export default AboutStack;