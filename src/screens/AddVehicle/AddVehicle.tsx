import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import img1 from '../../assets/images/img1.png';
import img1 from '../../assets/images/img1.png';

// Define navigation type
type AddVehicleProps = {
    navigation: NativeStackNavigationProp<any>;
};

const AddVehicle: React.FC<AddVehicleProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add your vehicle</Text>

            <View style={styles.container2}>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonHover,
                    ]}
                    onPress={() => navigation.navigate('AddViaReg')}
                >
                    <Text style={styles.buttonText}>Add Via Reg number</Text>
                    <Text style={styles.arrow}>›</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonHover,
                    ]}
                    onPress={() => navigation.navigate('AddRegNo')}
                >
                    <Text style={styles.buttonText}>Add Manually</Text>
                    <Text style={styles.arrow}>›</Text>
                </Pressable>
            </View>

            <Image source={img1} style={styles.image} resizeMode="contain" />
        </View>
    );
};

export default AddVehicle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#FFFFFF',
        marginTop: 40,
    },
    container2: {
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    button: {
        backgroundColor: '#E5E5E5',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonHover: {
        backgroundColor: '#1abc9c',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
    arrow: {
        color: '#000000',
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: 260,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});



// import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
// import React from 'react';
// import img1 from '../../assets/images/img1.png'
// const AddVehicle = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Add your vehicle</Text>

//         <View style={styles.container2}>
//             <Pressable
//                 style={({ pressed }) => [
//                     styles.button,
//                     pressed && styles.buttonHover,
//                 ]}
//                 onPress={() => navigation.navigate('AddViaReg')}
//             >
//                 <Text style={styles.buttonText}>Add Via Reg number</Text>
//                 <Text style={styles.arrow}>›</Text>
//             </Pressable>

//             <Pressable
//                 style={({ pressed }) => [
//                     styles.button,
//                     pressed && styles.buttonHover,
//                 ]}
//                 onPress={() => navigation.navigate('AddRegNo')}
//             >
//                 <Text style={styles.buttonText}>Add Manually</Text>
//                 <Text style={styles.arrow}>›</Text>
//             </Pressable>
//             </View>

//             <Image
//                 source={img1}
//                 style={styles.image}
//                 resizeMode="contain"
//             />
//         </View>
//     );
// };

// export default AddVehicle;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 0,
//         backgroundColor: '#FFFFFF',
//         marginTop: 40,
//     },
//     container2: {
//         padding: 24,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         // marginBottom: 20,
//         padding: 20,
//     },
//     button: {
//         backgroundColor: '#E5E5E5',
//         padding: 15,
//         borderRadius: 5,
//         marginBottom: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     buttonHover: {
//         backgroundColor: '#1abc9c',
//     },
//     buttonText: {
//         color: '#000000',
//         fontSize: 16,
//     },
//     arrow: {
//         color: '#000000',
//         fontSize: 20,
//     },
//     image: {
//         padding: 0,
//         width: '100%',
//         height: 260,
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         border : 0
//     },
// });
