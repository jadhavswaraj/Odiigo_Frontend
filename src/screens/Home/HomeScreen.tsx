import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { removeToken } from '../../utils/auth';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for navigation
type HomeScreenProps = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your RootStackParamList if defined
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = async (): Promise<void> => {
    await removeToken();
    navigation.replace('Login');
  };

  // Auto logout after 15 minutes
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLogout();
    }, 15 * 60 * 1000); // 15 minutes in milliseconds

    return () => clearTimeout(timeout); // Cleanup when unmounted
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🎉 Welcome to Odiigo!</Text>
      <Text style={styles.subtitle}>You're now logged in</Text>

      <Pressable
        style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
        onPress={() => navigation.navigate('AddVehicle')}>
        <Text style={styles.addButtonText}>Add Vehicle</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
        onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2937', // Dark background
    padding: 20,
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 40,
  },
  logoutButton: {
    width: '60%',
    backgroundColor: '#EF4444', // Red color for logout
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  logoutButtonPressed: {
    backgroundColor: '#DC2626', // Darker red on press
    transform: [{ scale: 0.98 }],
  },
  addButton: {
    width: '60%',
    backgroundColor: '#4F46E5', // Purple color for add
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  addButtonPressed: {
    backgroundColor: '#4338CA', // Darker purple on press
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;




// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { removeToken } from '../utils/auth';

// const HomeScreen = ({ navigation }) => {
//   const handleLogout = async () => {
//     await removeToken();
//     navigation.replace('Login');
//   };

//   // Auto logout after 15 minutes
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       handleLogout();
//     }, 15 * 60 * 1000); // 15 minutes in milliseconds

//     return () => clearTimeout(timeout); // Cleanup when unmounted
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>🎉 Welcome to Odiigo!</Text>
//       <Text style={styles.subtitle}>You're now logged in</Text>

//       <Pressable
//         style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
//         onPress={() => navigation.navigate('AddVehicle')}>
//         <Text style={styles.addButtonText}>Add Vehicle</Text>
//       </Pressable>

//       <Pressable
//         style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
//         onPress={handleLogout}>
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
