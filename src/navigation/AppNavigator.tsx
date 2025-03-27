
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../screens/Login/LoginScreen';
import OTPScreen from '../screens/Login/OTPScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import AddVehicle from '../screens/AddVehicle/AddVehicle';
import AddViaReg from '../screens/AddVehicle/AddViaReg';
import AddManually from '../screens/AddVehicle/AddManually';
import AddRegNo from '../screens/AddVehicle/AddRegNo';
import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';
import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';
import OnboardingScreen from '../screens/Carousel/OnboardingScreen';
import AddBrand from '../screens/AddVehicle/AddBrand';
import AddModel from '../screens/AddVehicle/AddModel';


export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  OTP: { mobile: string };
  Home: { userLocation?: { latitude: number; longitude: number } } | undefined;
  // Home: { userLocation?: { latitude: number; longitude: number } };
  LocationPermission: undefined;
  AddVehicle: undefined;
  AddViaReg: undefined;
  AddManually: undefined;
  AddRegNo: undefined;
  // BrandModelScreen: { licensePlate: string };
    AddBrand: { licensePlate: string };
  AddModel: { licensePlate: string; brandName: string };
  TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string };
};


const Stack = createStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="OTP" component={OTPScreen} />
  </>
);

const HomeStack = () => (
  <>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
  </>
);

const VehicleStack = () => (
  <>
    <Stack.Screen name="AddVehicle" component={AddVehicle} />
    <Stack.Screen name="AddViaReg" component={AddViaReg} />
    <Stack.Screen name="AddManually" component={AddManually} />
    <Stack.Screen name="AddRegNo" component={AddRegNo} />
    {/* <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} /> */}
    <Stack.Screen name="AddBrand" component={AddBrand} />
      <Stack.Screen name="AddModel" component={AddModel} />
    <Stack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
  </>
);

const AppNavigator: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Home' : 'Onboarding'}
      screenOptions={{ headerShown: false }}
    >
      {AuthStack()}
      {HomeStack()}
      {VehicleStack()}
    </Stack.Navigator>
  );
};

export default AppNavigator;




// ================================tsx runnings

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../screens/Login/LoginScreen';
// import OTPScreen from '../screens/Login/OTPScreen';
// import HomeScreen from '../screens/Home/HomeScreen';
// import AddVehicle from '../screens/AddVehicle/AddVehicle';
// import AddViaReg from '../screens/AddVehicle/AddViaReg';
// import AddManually from '../screens/AddVehicle/AddManually';
// import AddRegNo from '../screens/AddVehicle/AddRegNo';
// import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
// import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';
// import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';
// import OnboardingScreen from '../screens/Carousel/OnboardingScreen';

// // Define types for navigation stack
// export type RootStackParamList = {
//   Onboarding: undefined;
//   Login: undefined;
//   OTP: { mobile: string };
//   Home: undefined;
//   LocationPermission: undefined;
//   AddVehicle: undefined;
//   AddViaReg: undefined;
//   AddManually: undefined;
//   AddRegNo: undefined;
//   BrandModelScreen: { licensePlate: string };
//   TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string };
// };

// // Create stack navigator with types
// const Stack = createStackNavigator<RootStackParamList>();

// // Define props for AppNavigator
// interface AppNavigatorProps {
//   isLoggedIn: boolean;
// }


// const AppNavigator: React.FC<AppNavigatorProps> = ({ isLoggedIn }) => {
//   return (
//     <Stack.Navigator
//       initialRouteName={isLoggedIn ? 'Home' : 'Onboarding'} // Redirect to Home if logged in
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="OTP" component={OTPScreen} />
//       <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="AddVehicle" component={AddVehicle} />
//       <Stack.Screen name="AddViaReg" component={AddViaReg} />
//       <Stack.Screen name="AddManually" component={AddManually} />
//       <Stack.Screen name="AddRegNo" component={AddRegNo} />
//       <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} />
//       <Stack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;


