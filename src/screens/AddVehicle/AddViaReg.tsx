import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation type
type AddViaRegProps = {
  navigation: NativeStackNavigationProp<any>;
};

const AddViaReg: React.FC<AddViaRegProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Vehicle via Reg number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AddViaReg;



// import { Text, View, StyleSheet } from 'react-native'
// import React from 'react'

// const AddViaReg = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Add Vehicle via Reg number</Text>
//         </View>
//     )
// }

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
// });

// export default AddViaReg

