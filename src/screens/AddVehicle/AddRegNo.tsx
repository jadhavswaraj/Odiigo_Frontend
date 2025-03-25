import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation type
type AddRegNoProps = {
    navigation: NativeStackNavigationProp<any>;
};

const AddRegNo: React.FC<AddRegNoProps> = ({ navigation }) => {
    const [licensePlate, setLicensePlate] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Registration Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: MH12QK3327"
                value={licensePlate}
                onChangeText={setLicensePlate}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('BrandModelScreen', { licensePlate })}
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
        marginTop: 30,
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
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default AddRegNo;




// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const AddRegNo = ({ navigation }) => {
//     const [licensePlate, setLicensePlate] = useState('');

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter Registration Number</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ex : MH12QK3327"
//                 value={licensePlate}
//                 onChangeText={setLicensePlate}
//             />
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('BrandModelScreen', { licensePlate })}
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
//         marginTop : 30
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
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


// export default AddRegNo;
