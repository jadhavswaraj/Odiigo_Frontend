import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CalendarScreen from '../Home/Calender/CalendarScreen';
import CarsScreen from '../Home/Car/CarsScreen';
import NotificationsScreen from '../Home/Notification/NotificationsScreen';
import ProfileScreen from '../Home/Profile/ProfileScreen';

// Define types for navigation params
type HomeScreenParams = {
  Home?: { userLocation?: { latitude: number; longitude: number } };
};

interface HomeScreenProps {
  route?: RouteProp<HomeScreenParams, 'Home'>;
  navigation?: NativeStackNavigationProp<HomeScreenParams>;
}

const Tab = createBottomTabNavigator();
Geocoder.init('AIzaSyBbTg2d4Rtm5YFXBvtsWspHlFBpZFClwGg');

const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeScreenParams>>();
  const [location, setLocation] = useState<string>('Fetching location...');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const fetchStoredLocation = async () => {
      if (route?.params?.userLocation) {
        setLatitude(route.params.userLocation.latitude);
        setLongitude(route.params.userLocation.longitude);
      } else {
        const storedLat = await AsyncStorage.getItem('latitude');
        const storedLng = await AsyncStorage.getItem('longitude');
        
        if (storedLat && storedLng) {
          setLatitude(parseFloat(storedLat));
          setLongitude(parseFloat(storedLng));
        } else {
          Alert.alert('Location Error', 'Location data is missing.');
        }
      }
    };

    fetchStoredLocation();
  }, [route?.params?.userLocation]);

  useEffect(() => {
    if (!latitude || !longitude) {
      console.warn('Latitude or Longitude is missing. Check if location is passed from the previous screen.');
      return;
    }

    Geocoder.from(latitude, longitude)
      .then(response => {
        const address = response.results[0]?.formatted_address || 'Address not found';
        setLocation(address);
      })
      .catch(error => console.warn('Geocoding Error:', error));
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Odiigo</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
      <TextInput placeholder="Search by Car, Model, or Brand" style={styles.searchBar} placeholderTextColor="#777" />
      <View style={styles.centerMessage}>
        <Text style={styles.welcomeText}>Welcome to Home Screen</Text>
      </View>
    </View>
  );
};

const HomeTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="calendar-today" size={size} color={color} /> }} />
      <Tab.Screen name="Cars" component={CarsScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="car" size={size} color={color} /> }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }} />
    </Tab.Navigator>
  );
};


// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation, RouteProp } from '@react-navigation/native';
// import Geocoder from 'react-native-geocoding';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// // Import actual screens
// import CalendarScreen from '../Home/Calender/CalendarScreen';
// import CarsScreen from '../Home/Car/CarsScreen';
// import NotificationsScreen from '../Home/Notification/NotificationsScreen';
// import ProfileScreen from '../Home/Profile/ProfileScreen';

// // Define types for navigation params
// type HomeScreenParams = {
//   Home?: { userLocation?: { latitude: number; longitude: number } };
// };

// interface HomeScreenProps {
//   route?: RouteProp<HomeScreenParams, 'Home'>;
//   navigation?: NativeStackNavigationProp<HomeScreenParams>;
// }

// // Initialize Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// // Initialize Geocoder (Replace 'YOUR_GOOGLE_API_KEY' with actual key)
// Geocoder.init('AIzaSyBbTg2d4Rtm5YFXBvtsWspHlFBpZFClwGg');

// const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
//   const navigation = useNavigation<NativeStackNavigationProp<HomeScreenParams>>();
//   const { latitude, longitude } = route?.params?.userLocation || {};
//   const [location, setLocation] = useState<string>('Fetching location...');



// useEffect(() => {
//   console.log('Latitude:', latitude, 'Longitude:', longitude); // Debugging
//   if (!latitude || !longitude) {
//     console.warn('Latitude or Longitude is missing. Check if location is passed from previous screen.');
//     return;
//   }

//   Geocoder.from(latitude, longitude)
//     .then(response => {
//       const address = response.results[0]?.formatted_address || 'Address not found';
//       console.log('Geocoded Address:', address); // Debugging
//       setLocation(address);
//     })
//     .catch(error => console.warn('Geocoding Error:', error));
// }, [latitude, longitude]);


//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <Text style={styles.logo}>Odiigo</Text>
//         <View style={styles.locationContainer}>
//           <Ionicons name="location-outline" size={20} color="black" />
//           <Text style={styles.locationText}>{location}</Text>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <TextInput
//         placeholder="Search by Car, Model, or Brand"
//         style={styles.searchBar}
//         placeholderTextColor="#777"
//       />

//       {/* Center Message */}
//       <View style={styles.centerMessage}>
//         <Text style={styles.welcomeText}>Welcome to Home Screen</Text>
//       </View>
//     </View>
//   );
// };

// const HomeTabNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
//       <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }} />
//       <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="calendar-today" size={size} color={color} /> }} />
//       <Tab.Screen name="Cars" component={CarsScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="car" size={size} color={color} /> }} />
//       <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} /> }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }} />
//     </Tab.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#555',
  },
  searchBar: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  centerMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 },
  },
});

export default HomeTabNavigator;





// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { removeToken, checkTokenValidity } from '../../utils/auth';
// import { StackNavigationProp } from '@react-navigation/stack';

// // Define the type for navigation
// type HomeScreenProps = {
//   navigation: StackNavigationProp<any>;
// };

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
//   const handleLogout = async (): Promise<void> => {
//     await removeToken();
//     navigation.replace('Login');
//   };

//   // 🔹 Check if the token is valid when the component mounts
//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const isValid = await checkTokenValidity();
//       if (!isValid) {
//         handleLogout();
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   // 🔹 Auto logout after 15 minutes of inactivity (resets if user interacts)
//   useEffect(() => {
//     let timeout = setTimeout(() => {
//       handleLogout();
//     }, 15 * 60 * 1000);

//     const resetTimer = () => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         handleLogout();
//       }, 15 * 60 * 1000);
//     };

//     // Listen for user interaction (navigation, press events)
//     const unsubscribeFocus = navigation.addListener('focus', resetTimer);

//     return () => {
//       clearTimeout(timeout);
//       unsubscribeFocus();
//     };
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>🎉 Welcome to Odiigo!</Text>
//       <Text style={styles.subtitle}>You're now logged in</Text>

//       <Pressable
//         style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
//         onPress={() => navigation.navigate('AddVehicle')}
//       >
//         <Text style={styles.addButtonText}>Add Vehicle</Text>
//       </Pressable>

//       <Pressable
//         style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
//         onPress={handleLogout}
//       >
//         <Text style={styles.buttonText}>Logout</Text>
//       </Pressable>
//     </View>
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1F2937', // Dark background
//     padding: 20,
//   },
//   welcome: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#9CA3AF',
//     marginBottom: 40,
//   },
//   logoutButton: {
//     width: '60%',
//     backgroundColor: '#EF4444', // Red color for logout
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 3,
//     marginTop: 10,
//   },
//   logoutButtonPressed: {
//     backgroundColor: '#DC2626', // Darker red on press
//     transform: [{ scale: 0.98 }],
//   },
//   addButton: {
//     width: '60%',
//     backgroundColor: '#4F46E5', // Purple color for add
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 3,
//     marginBottom: 10,
//   },
//   addButtonPressed: {
//     backgroundColor: '#4338CA', // Darker purple on press
//     transform: [{ scale: 0.98 }],
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;

