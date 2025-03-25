import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/AppNavigator'; // ✅ Correct import

// Define navigation and route types
type BrandModelScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BrandModelScreen'>;
  route: RouteProp<RootStackParamList, 'BrandModelScreen'>;
};

const BrandModelScreen: React.FC<BrandModelScreenProps> = ({ navigation, route }) => {
  const { licensePlate } = route.params;
  const [brandName, setBrandName] = useState<string>('');
  const [brandModel, setBrandModel] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Brand & Model</Text>
      <TextInput
        style={styles.input}
        placeholder="Brand Name"
        value={brandName}
        onChangeText={setBrandName}
      />
      <TextInput
        style={styles.input}
        placeholder="Brand Model"
        value={brandModel}
        onChangeText={setBrandModel}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('TransmissionFuelScreen', { licensePlate, brandName, brandModel })
        }
      >
        <Text style={styles.buttonText}>Next</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#2C3E50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BrandModelScreen;





// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const BrandModelScreen = ({ navigation, route }) => {
//     const { licensePlate } = route.params;
//     const [brandName, setBrandName] = useState('');
//     const [brandModel, setBrandModel] = useState('');

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter Brand & Model</Text>
//             <TextInput style={styles.input} placeholder="Brand Name" value={brandName} onChangeText={setBrandName} />
//             <TextInput style={styles.input} placeholder="Brand Model" value={brandModel} onChangeText={setBrandModel} />

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('TransmissionFuelScreen', { licensePlate, brandName, brandModel })}
//             >
//                 <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#FFFFFF',
//         marginTop: 50, // Adjust for spacing from the top
        
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 14,
//         borderRadius: 5,
//         marginBottom: 20
//     },
//     buttonContainer: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         right: 20,
//     },
//     button: {
//         backgroundColor: '#2C3E50',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginBottom: 20,
//         position: 'absolute',
//         bottom: 30,
//         left: 0,
//         right: 0,
//         height: 50,
//         justifyContent: 'center',
//         margin: 20
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18
//     }
// });

// export default BrandModelScreen;
