import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type AddBrandProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'AddBrand'>;
    route: { params: { licensePlate: string } };
};

// Manually map brand names to their images
const brandImages: { [key: string]: any } = {
    Toyota: require('../../assets/images/toyota-logo.png'),
    Tata: require('../../assets/images/tata-logo.png'),
    Mahindra: require('../../assets/images/mahindra-logo.png'),
    Suzuki: require('../../assets/images/suzuki-logo.png'),
    Renault: require('../../assets/images/renault-logo.png'),
    Skoda: require('../../assets/images/skoda-logo.png'),
    Hyundai: require('../../assets/images/hyundai-logo.png'),
    Ford: require('../../assets/images/ford-logo.png'),
    Audi: require('../../assets/images/audi-logo.png'),
    BMW: require('../../assets/images/bmw-logo.png'),
    BYD: require('../../assets/images/byd-logo.png'),
    Chevrolet: require('../../assets/images/chevrolet-logo.png'),
    Citroen: require('../../assets/images/citroen-logo.png'),
    Fiat: require('../../assets/images/fiat-logo.png'),  // Should be "Fiat", not "Flat"
    Honda: require('../../assets/images/honda-logo.png'),
    Isuzu: require('../../assets/images/isuzu-logo.png'),
    Jaguar: require('../../assets/images/jaguar-logo.png'),
    Jeep: require('../../assets/images/jeep-logo.png'),
    Kia: require('../../assets/images/kia-logo.png'),
    'LandRover': require('../../assets/images/land-rover-logo.png'),
    'Mercedes': require('../../assets/images/mercedes-benz-logo.png'),
    MG: require('../../assets/images/mg-logo.png'),
    Mitsubishi: require('../../assets/images/mitsubishi-logo.png'),
    Nissan: require('../../assets/images/nissan-logo.png'),
    Porsche: require('../../assets/images/porsche-logo.png'),
    Volkswagen: require('../../assets/images/volkswagen.png'),
    Volvo: require('../../assets/images/volvo-logo.png'),
};

const brands = Object.keys(brandImages);

const AddBrand: React.FC<AddBrandProps> = ({ navigation, route }) => {
    const { licensePlate } = route.params;
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const handleBrandSelect = (brand: string) => {
        setSelectedBrand(brand);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add your vehicle</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by Car Model or Brand"
                placeholderTextColor="#999"
            />
            <Text style={styles.subTitle}>Select your car Brand</Text>

            <FlatList
                data={brands}
                numColumns={4}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.brandContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.brandButton, selectedBrand === item && styles.selectedBrand]}
                        onPress={() => handleBrandSelect(item)}
                    >
                        <Image source={brandImages[item]} style={styles.brandImage} />
                        <Text style={styles.brandText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity
                style={[styles.continueButton, !selectedBrand && styles.disabledButton]}
                onPress={() => selectedBrand && navigation.navigate('AddModel', { licensePlate, brandName: selectedBrand })}
                disabled={!selectedBrand}
            >
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F8F8',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    brandContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    brandButton: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC',
    },
    selectedBrand: {
        borderColor: '#000',
        borderWidth: 2,
    },
    brandImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    brandText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '500',
    },
    continueButton: {
        backgroundColor: '#2C3E50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        justifyContent: 'center',
    },
    disabledButton: {
        backgroundColor: '#CCC',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default AddBrand;

