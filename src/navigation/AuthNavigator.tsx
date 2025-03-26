import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import OTPScreen from '../screens/Login/OTPScreen';
import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';

// Define types for auth navigation stack
export type AuthStackParamList = {
  Login: undefined;
  OTP: { mobile: string };
  LocationPermission: undefined;
};

// Create stack navigator with types
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="OTP" component={OTPScreen} />
      <AuthStack.Screen name="LocationPermission" component={LocationPermissionScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;




// AuthStack.tsx
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../screens/Login/LoginScreen';
// import OTPScreen from '../screens/Login/OTPScreen';
// import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';

// // Define types for AuthStack
// export type AuthStackParamList = {
//   Login: undefined;
//   OTP: { mobile: string };
//   LocationPermission: undefined;
// };

// const Stack = createStackNavigator<AuthStackParamList>();

// export const AuthStack: React.FC = () => {
//   return (
//     <>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="OTP" component={OTPScreen} />
//       <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
//     </>
//   );
// };



