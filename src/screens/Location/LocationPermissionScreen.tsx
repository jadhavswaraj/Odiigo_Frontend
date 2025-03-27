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

// Request location permissions
const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);

    return (
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED ||
      granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED
    );
  }
  return true; // iOS handles permissions separately
};

// Handle allowing location access
const handleAllow = async (navigation: any): Promise<void> => {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    Alert.alert('Permission Denied', 'You denied location access.');
    navigation.navigate('Home', { userLocation: undefined }); // ✅ Prevents crash
    return;
  }

  Geolocation.getCurrentPosition(
    async (position) => {
      if (!position?.coords) {
        console.error('⚠️ No coordinates found');
        Alert.alert('Error', 'Failed to get location.');
        navigation.navigate('Home', { userLocation: undefined });
        return;
      }

      const { latitude, longitude } = position.coords;
      console.log('✅ Location:', latitude, longitude);

      // Store location in AsyncStorage
      await AsyncStorage.setItem('latitude', String(latitude));
      await AsyncStorage.setItem('longitude', String(longitude));

      // Verify stored data
      const storedLat = await AsyncStorage.getItem('latitude');
      const storedLon = await AsyncStorage.getItem('longitude');
      console.log('📍 Stored Location:', { storedLat, storedLon });

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

      try {
        const response = await axios.post(
          'http://10.20.20.209:3000/api/location/store-location',
          { phone, latitude, longitude }
        );
        console.log('✅ API Response:', response.data);
        Alert.alert('Success', 'Location stored successfully');
      } catch (error: any) {
        console.error('❌ API Error:', error?.response?.data || error.message);
        Alert.alert('Error', `Failed to store location: ${error?.response?.data?.message || error.message}`);
      }

      // Navigate to Home with location data
      navigation.navigate('Home', { userLocation: { latitude, longitude } });
    },
    (error) => {
      console.error('❌ Location Error:', error);
      Alert.alert('Error', 'Failed to get location. Please try again.');

      // Proceed to Home without location
      navigation.navigate('Home', { userLocation: undefined });
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

const LocationPermissionScreen: React.FC<LocationPermissionScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allow Location Access</Text>
      <Text style={styles.subtitle}>
        We need your location to improve the experience.
      </Text>
      <Pressable style={styles.button} onPress={() => handleAllow(navigation)}>
        <Text style={styles.buttonText}>Allow</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.notNowButton]}
        onPress={() => navigation.navigate('Home', { userLocation: undefined })}
      >
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
    backgroundColor: '#f0f2f5', // Softer background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333', // Darker text for better readability
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: '#666',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8, // Rounded edges
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    width: '80%', // Button width consistency
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Modern look
    letterSpacing: 1,
  },
  notNowButton: {
    backgroundColor: '#6c757d',
  },
});


export default LocationPermissionScreen;


