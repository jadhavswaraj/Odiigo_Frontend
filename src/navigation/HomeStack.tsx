import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';

export type HomeStackParamList = {
  Home: undefined;
//   LocationPermission: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="LocationPermission" component={LocationPermissionScreen} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
