
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator'; // Correct import


type TransmissionFuelScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TransmissionFuelScreen'>;
  route: RouteProp<RootStackParamList, 'TransmissionFuelScreen'>;
};

const TransmissionFuelScreen: React.FC<TransmissionFuelScreenProps> = ({ navigation, route }) => {
  const { licensePlate, brandName, brandModel } = route.params;
  const [transmissionType, setTransmissionType] = useState<string>('Manual');
  const [fuelType, setFuelType] = useState<string>('Petrol');

  const handleSubmit = async () => {
    const vehicleData = {
      license_plate: licensePlate,
      brand_name: brandName,
      brand_model: brandModel,
      transmission_type: transmissionType,
      fuel_type: fuelType,
    };

    try {
      await axios.post('http://10.20.20.209:3000/api/vehicles', vehicleData);
      Alert.alert('Success', 'Vehicle added successfully!');
      // navigation.replace('Home');
      navigation.replace('Home', { userLocation: undefined }); // ✅ Pass undefined if no location is needed

    } catch (error) {
      Alert.alert('Error', 'Failed to add vehicle');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Transmission & Fuel Type</Text>

      <Text style={styles.label}>Transmission Type</Text>
      <View style={styles.optionContainer1}>
        {['Manual', 'Automatic'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.optionButton1, transmissionType === type && styles.selected]}
            onPress={() => setTransmissionType(type)}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Fuel Type</Text>
      <View style={styles.optionContainer}>
        {['Petrol', 'Diesel', 'Electric', 'CNG'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.optionButton, fuelType === type && styles.selected]}
            onPress={() => setFuelType(type)}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 50, // Adjust for spacing from the top
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  optionContainer1: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  optionContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionButton1: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '23%',
    alignItems: 'center',
  },
  selected: { backgroundColor: '#1abc9c' },
  button: {
    backgroundColor: '#2C3E50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 50, // Adjust for spacing from the bottom
    margin: 20,
  },
  buttonText: { color: 'white', fontSize: 18 },
});

export default TransmissionFuelScreen;


