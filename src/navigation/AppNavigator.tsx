import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import OTPScreen from '../screens/Login/OTPScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import AddVehicle from '../screens/AddVehicle/AddVehicle';
import AddViaReg from '../screens/AddVehicle/AddViaReg';
import AddManually from '../screens/AddVehicle/AddManually';
import AddRegNo from '../screens/AddVehicle/AddRegNo';
import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';
import LocationPermissionScreen from '../screens/Location/LocationPermissionScreen';

// Define types for navigation stack
export type RootStackParamList = {
  Login: undefined;
  OTP: { mobile: string };
  Home: undefined;
  LocationPermission: undefined;
  AddVehicle: undefined;
  AddViaReg: undefined;
  AddManually: undefined;
  AddRegNo: undefined;
  BrandModelScreen: { licensePlate: string };
  TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string };
};

// Create stack navigator with types
const Stack = createStackNavigator<RootStackParamList>();

// Define props for AppNavigator
interface AppNavigatorProps {
  isLoggedIn: boolean;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ isLoggedIn }) => {
  console.log('AppNavigator is rendering...'); // ✅ Added for debugging to check if it's being called

  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Home' : 'Login'} // ✅ Ensures correct initial screen
      screenOptions={{ headerShown: false }}
    >
      <>
        {/* ✅ Wrapped inside Fragment (<></>) to avoid unwanted elements inside Navigator */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddVehicle" component={AddVehicle} />
        <Stack.Screen name="AddViaReg" component={AddViaReg} />
        <Stack.Screen name="AddManually" component={AddManually} />
        <Stack.Screen name="AddRegNo" component={AddRegNo} />
        <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} />
        <Stack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
      </>
    </Stack.Navigator>
  );
};

export default AppNavigator;


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../screens/LoginScreen';
// import OTPScreen from '../screens/OTPScreen';
// import HomeScreen from '../screens/HomeScreen';
// import AddVehicle from '../screens/AddVehicle/AddVehicle';
// import AddViaReg from '../screens/AddVehicle/AddViaReg';
// import AddManually from '../screens/AddVehicle/AddManually';
// import AddRegNo from '../screens/AddVehicle/AddRegNo';
// import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
// import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';
// import LocationPermissionScreen from '../screens/LocationPermissionScreen';

// // Define types for navigation stack
// export type RootStackParamList = {
//   Login: undefined;
//   OTP: { mobile: string };
//   Home: undefined;
//   LocationPermission: undefined;
//   AddVehicle: undefined;
//   AddViaReg: undefined;
//   AddManually: undefined;
//   AddRegNo: undefined;
//   BrandModelScreen: { licensePlate: string }; // ✅ Fixed type
//   TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string }; // ✅ Fixed type
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
//       initialRouteName={isLoggedIn ? 'Home' : 'Login'} // ✅ Fixed here
//       screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="OTP" component={OTPScreen} />
//       <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="AddVehicle" component={AddVehicle} />
//       <Stack.Screen name="AddViaReg" component={AddViaReg} />
//       <Stack.Screen name="AddManually" component={AddManually} /> {/* ✅ Uncommented */}
//       <Stack.Screen name="AddRegNo" component={AddRegNo} />
//       <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} />
//       <Stack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;






// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from '../screens/LoginScreen';
// import OTPScreen from '../screens/OTPScreen';
// import HomeScreen from '../screens/HomeScreen';
// import AddVehicle from '../screens/AddVehicle/AddVehicle';
// import AddViaReg from '../screens/AddVehicle/AddViaReg';
// import AddManually from '../screens/AddVehicle/AddManually';
// import AddRegNo from '../screens/AddVehicle/AddRegNo';
// import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
// import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';
// import LocationPermissionScreen from '../screens/LocationPermissionScreen';
// const Stack = createStackNavigator();

// const AppNavigator = ({isLoggedIn}) => {
//   return (
//     <Stack.Navigator
//       // initialRouteName={isLoggedIn ? "Home" : "Login"}
//       initialRouteName={isLoggedIn ? 'Home' : 'Home'}
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="OTP" component={OTPScreen} />
//       <Stack.Screen
//         name="LocationPermission"
//         component={LocationPermissionScreen}
//       />

//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="AddVehicle" component={AddVehicle} />
//       <Stack.Screen name="AddViaReg" component={AddViaReg} />
//       {/* <Stack.Screen name="AddManually" component={AddManually} /> */}
//       <Stack.Screen name="AddRegNo" component={AddRegNo} />
//       <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} />
//       <Stack.Screen
//         name="TransmissionFuelScreen"
//         component={TransmissionFuelScreen}
//       />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

