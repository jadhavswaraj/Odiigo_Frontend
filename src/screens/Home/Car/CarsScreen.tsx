import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for navigation
type CarsScreenProps = {
  navigation: StackNavigationProp<any>;
};

const CarsScreen: React.FC<CarsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚗 My Cars</Text>
      <Text style={styles.subtitle}>Manage your vehicles here</Text>

      {/* Add Vehicle Button */}
      <Pressable
        style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
        onPress={() => navigation.navigate('AddVehicle')}
      >
        <Text style={styles.addButtonText}>Add Vehicle</Text>
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
  addButton: {
    width: '60%',
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonPressed: {
    backgroundColor: '#4338CA',
    transform: [{ scale: 0.98 }],
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarsScreen;




// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const CarsScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Cars Screen</Text>
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

// export default CarsScreen;
