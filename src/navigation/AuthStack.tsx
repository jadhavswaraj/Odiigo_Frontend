import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import OTPScreen from '../screens/Login/OTPScreen';
import OnboardingScreen from '../screens/Carousel/OnboardingScreen';

export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    OTP: { mobile: string };
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
);

export default AuthStack;
