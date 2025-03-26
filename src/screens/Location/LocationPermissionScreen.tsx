import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';



type LocationPermissionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LocationPermission'>;
};

const LocationPermissionScreen: React.FC<LocationPermissionScreenProps> = ({ navigation }) => {
  const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Deny',
          buttonPositive: 'Allow',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // iOS handles permissions separately
  };

  const handleAllow = async (): Promise<void> => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        async (position) => {
          console.log('Location:', position.coords);
          const { latitude, longitude } = position.coords;

          // Retrieve phone number from AsyncStorage
          let phone = await AsyncStorage.getItem('phone');
          if (!phone) {
            Alert.alert('Error', 'Phone number not found. Please log in again.');
            return;
          }

          phone = phone.trim();
          if (!phone.startsWith('+91')) {
            phone = `+91${phone}`;
          }

          console.log('📡 Sending API Request:', { phone, latitude, longitude });

          // Send location to backend
          try {
            const response = await axios.post(
              'http://10.20.20.209:3000/api/location/store-location',
              { phone, latitude, longitude }
            );
            console.log('API Response:', response.data);
            Alert.alert('Success', 'Location stored successfully');
          } catch (error: any) {
            console.error('API Error:', error?.response?.data || error.message);
            Alert.alert('Error', 'Failed to store location');
          }
        },
        (error) => {
          console.log('Location Error:', error);
          Alert.alert('Error', 'Failed to get location.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      Alert.alert('Permission Denied', 'You denied location access.');
    }

  
    navigation.navigate('Home');

  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allow Location Access</Text>
      <Text style={styles.subtitle}>
        We need your location to improve the experience.
      </Text>
      <Pressable style={styles.button} onPress={handleAllow}>
        <Text style={styles.buttonText}>Allow</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.notNowButton]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Not Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 10 },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  notNowButton: { backgroundColor: '#6B7280' },
});

export default LocationPermissionScreen;




