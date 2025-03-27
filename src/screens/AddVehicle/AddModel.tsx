import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
 
type AddModelProps = {
    navigation: NativeStackNavigationProp<any>;
    route: { params: { licensePlate: string; brandName: string } };
};
 
const AddModel: React.FC<AddModelProps> = ({ navigation, route }) => {
    const { licensePlate, brandName } = route.params;
    const [brandModel, setBrandModel] = useState<string>('');
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Model Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Model Name"
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
 
export default AddModel;