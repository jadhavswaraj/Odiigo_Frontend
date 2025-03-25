// VehicleStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddVehicle from '../screens/AddVehicle/AddVehicle';
import AddViaReg from '../screens/AddVehicle/AddViaReg';
import AddManually from '../screens/AddVehicle/AddManually';
import AddRegNo from '../screens/AddVehicle/AddRegNo';
import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';

// Define types for VehicleStack
export type VehicleStackParamList = {
  AddVehicle: undefined;
  AddViaReg: undefined;
  AddManually: undefined;
  AddRegNo: undefined;
  BrandModelScreen: { licensePlate: string };
  TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string };
};

const Stack = createStackNavigator<VehicleStackParamList>();

export const VehicleStack: React.FC = () => {
  return (
    <>
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen name="AddViaReg" component={AddViaReg} />
      <Stack.Screen name="AddManually" component={AddManually} />
      <Stack.Screen name="AddRegNo" component={AddRegNo} />
      <Stack.Screen name="BrandModelScreen" component={BrandModelScreen} />
      <Stack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
    </>
  );
};


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddVehicle from '../screens/AddVehicle/AddVehicle';
// import AddViaReg from '../screens/AddVehicle/AddViaReg';
// import AddManually from '../screens/AddVehicle/AddManually';
// import AddRegNo from '../screens/AddVehicle/AddRegNo';
// import BrandModelScreen from '../screens/AddVehicle/BrandModelScreen';
// import TransmissionFuelScreen from '../screens/AddVehicle/TransmissionFuelScreen';

// export type VehicleStackParamList = {
//   AddVehicle: undefined;
//   AddViaReg: undefined;
//   AddManually: undefined;
//   AddRegNo: undefined;
//   BrandModelScreen: { licensePlate: string };
//   TransmissionFuelScreen: { licensePlate: string; brandName: string; brandModel: string };
// };

// const VehicleStack = createStackNavigator<VehicleStackParamList>();

// const VehicleNavigator = () => {
//   return (
//     <VehicleStack.Navigator screenOptions={{ headerShown: false }}>
//       <VehicleStack.Screen name="AddVehicle" component={AddVehicle} />
//       <VehicleStack.Screen name="AddViaReg" component={AddViaReg} />
//       <VehicleStack.Screen name="AddManually" component={AddManually} />
//       <VehicleStack.Screen name="AddRegNo" component={AddRegNo} />
//       <VehicleStack.Screen name="BrandModelScreen" component={BrandModelScreen} />
//       <VehicleStack.Screen name="TransmissionFuelScreen" component={TransmissionFuelScreen} />
//     </VehicleStack.Navigator>
//   );
// };

// export default VehicleNavigator;
