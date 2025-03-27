import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { removeToken, checkTokenValidity } from '../../../utils/auth';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for navigation
type ProfileScreenProps = {
  navigation: StackNavigationProp<any>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const handleLogout = async (): Promise<void> => {
    await removeToken();
    navigation.replace('Login');
  };

  // 🔹 Check if the token is valid when the component mounts
  useEffect(() => {
    const checkAuthStatus = async () => {
      const isValid = await checkTokenValidity();
      if (!isValid) {
        handleLogout();
      }
    };

    checkAuthStatus();
  }, []);

  // 🔹 Auto logout after 15 minutes of inactivity (resets if user interacts)
  useEffect(() => {
    let timeout = setTimeout(() => {
      handleLogout();
    }, 15 * 60 * 1000);

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
      }, 15 * 60 * 1000);
    };

    // Listen for user interaction (navigation, press events)
    const unsubscribeFocus = navigation.addListener('focus', resetTimer);

    return () => {
      clearTimeout(timeout);
      unsubscribeFocus();
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <Text style={styles.subtitle}>Manage your account</Text>

      <Pressable
        style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
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
  title: {
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
  },
  logoutButtonPressed: {
    backgroundColor: '#DC2626', // Darker red on press
    transform: [{ scale: 0.98 }],
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ProfileScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Profile Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ProfileScreen;
