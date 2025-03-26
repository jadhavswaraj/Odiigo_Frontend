import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';

export type HomeStackParamList = {
    Home: undefined;
    LocationPermission: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
    </Stack.Navigator>
);

export default HomeStack;
