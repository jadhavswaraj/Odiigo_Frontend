import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  AddManually: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'AddManually'>;

const AddManually: React.FC<Props> = ({ navigation }) => {
  const [vehicleName, setVehicleName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Vehicle Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Vehicle Name"
        value={vehicleName}
        onChangeText={setVehicleName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Navigate back or next screen
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddManually;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2C3E50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// const AddManually = ({ navigation }) => {
//     const [licensePlate, setLicensePlate] = useState('');
//     const [brandName, setBrandName] = useState('');
//     const [brandModel, setBrandModel] = useState('');
//     const [transmissionType, setTransmissionType] = useState('Manual');
//     const [fuelType, setFuelType] = useState('Petrol');

//     const handleSubmit = async () => {
//         if (!licensePlate || !brandName || !brandModel) {
//             Alert.alert("Error", "All fields are required");
//             return;
//         }

//         const vehicleData = {
//             license_plate: licensePlate,
//             brand_name: brandName,
//             brand_model: brandModel,
//             transmission_type: transmissionType,
//             fuel_type: fuelType
//         };

//         try {
//             await axios.post('http://10.20.23.99:3000/api/vehicles', vehicleData);
//             Alert.alert("Success", "Vehicle added successfully!");
//             navigation.goBack();
//         } catch (error) {
//             Alert.alert("Error", "Failed to add vehicle");
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Add Vehicle Manually</Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder="License Plate"
//                 value={licensePlate}
//                 onChangeText={setLicensePlate}
//             />

//             <TextInput
//                 style={styles.input}
//                 placeholder="Brand Name"
//                 value={brandName}
//                 onChangeText={setBrandName}
//             />

//             <TextInput
//                 style={styles.input}
//                 placeholder="Brand Model"
//                 value={brandModel}
//                 onChangeText={setBrandModel}
//             />

//             {/* Transmission Type (Buttons) */}
//             <Text style={styles.label}>Transmission Type</Text>
//             <View style={styles.optionContainer1}>
//                 {['Manual', 'Automatic'].map((type) => (
//                     <TouchableOpacity
//                         key={type}
//                         style={[styles.optionButton1, transmissionType === type && styles.selected]}
//                         onPress={() => setTransmissionType(type)}
//                     >
//                         <Text>{type}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>

//             {/* Fuel Type (Buttons) */}
//             <Text style={styles.label}>Fuel Type</Text>
//             <View style={styles.optionContainer}>
//                 {['Petrol', 'Diesel', 'Electric', 'CNG'].map((type) => (
//                     <TouchableOpacity
//                         key={type}
//                         style={[styles.optionButton, fuelType === type && styles.selected]}
//                         onPress={() => setFuelType(type)}
//                     >
//                         <Text>{type}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>

//             {/* <Button title="Submit" onPress={handleSubmit} style={styles.submitButton} /> */}
//             <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//                 <Text style={styles.submitButtonText}>Submit</Text>
//             </TouchableOpacity>

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#FFFFFF',
//         marginTop: 40,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 10,
//     },
//     optionContainer1: {
//         padding : 10,
//         flexDirection: 'row',
//         // justifyContent: 's',
//         gap : 10,
//         marginBottom: 10,
//     },
//     optionContainer: {
//         padding : 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     optionButton1: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         width: '50%',
//         alignItems: 'center',
//     },
//     optionButton: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         width: '23%',
//         alignItems: 'center',
//     },
//     selected: {
//         backgroundColor: '#1abc9c',
//     },
//     submitButton : {
//         position: 'absolute',
//         bottom: 0,
//         backgroundColor: '#2C3E50',
//         padding: 14,
//         borderRadius: 10,
//         marginTop: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 2},
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 3,
//         marginBottom: 50,
//         width: '100%',
//         margin : 20
//     },
//     submitButtonText: {
//         color: '#ffffff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default AddManually;



// // import { Text, View, StyleSheet } from 'react-native'
// // import React from 'react'

// // const AddManually = ({ navigation }) => {
// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Add Vehicle Manually</Text>
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 20,
// //         backgroundColor: '#FFFFFF',
// //         marginTop: 40,
// //     },
// //     title: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         marginBottom: 20,
// //     },
// // });

// // export default AddManually


// // import { Text, View } from 'react-native'
// // import React, { Component } from 'react'

// // const AddManually = ({ navigation }) => {
// //     {
// //         return (
// //             <View>
// //                 <Text>Add Vehicle Manually</Text>
// //             </View>
// //         )
// //     }
// // }

// export default AddManually