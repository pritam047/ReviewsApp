import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
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
      name='Home'
      component={Home}
      options={({navigation}) => {
        return {
          headerTitle: () => <Header title='GameZone' navigation={navigation} />
        }
      }}
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export default HomeStack;