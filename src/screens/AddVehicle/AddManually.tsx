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
