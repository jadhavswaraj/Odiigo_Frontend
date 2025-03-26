import React, { useRef, useState } from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator'; // Adjust import path as needed

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#fff', white: '#000' };

const slides = [
    {
        id: '1',
        image: require('../../assets/onboarding1.png'),
        title: 'Expert car care ',
        subtitle: 'Get certified, high-quality service for all car brands, ensuring your car stays in top condition',
    },
    {
        id: '2',
        image: require('../../assets/onboarding2.png'),
        title: 'Book in minutes',
        subtitle: 'Schedule your car service quickly and easily, anytime, anywhere, with just a few taps',
    },
    {
        id: '3',
        image: require('../../assets/onboarding3.png'),
        title: 'Clear, upfront costs',
        subtitle: 'Know exactly what you are paying for with detailed, transparent pricing and no hidden fees',
    },
    {
        id: '4',
        image: require('../../assets/onboarding4.png'),
        title: 'Genuine Parts, Guaranteed',
        subtitle: 'We use 100% authentic parts to keep your car running smoothly and safely.',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center', width }}>
            <Image source={item?.image} style={styles.image} />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

// Define navigation prop type
type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

// Update props type
interface OnboardingScreenProps {
    navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList<any>>(null);

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex < slides.length) {
            flatListRef.current?.scrollToOffset({ offset: nextSlideIndex * width });
            setCurrentSlideIndex(nextSlideIndex);
        } else {
            // If we're on the last slide, navigate to Login
            navigation.replace('Login');
        }
    };

    const skip = () => {
        // Navigate to Login screen and replace the current screen
        navigation.replace('Login');
    };

    const Footer = () => {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex === index && { backgroundColor: COLORS.white, width: 25 },
                            ]}
                        />
                    ))}
                </View>

                <View>
                    {currentSlideIndex === slides.length - 1 ? (
                        <View style={styles.footerButtons}>
                            <TouchableOpacity
                                style={[styles.btn, styles.skipBtn]}
                                onPress={skip}
                            >
                                <Text style={[styles.btnText, { color: COLORS.white }]}>SKIP</Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('Login')}
                            >
                                <Text style={styles.btnText}>GET STARTED</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.footerButtons}>
                            <TouchableOpacity style={[styles.btn, styles.skipBtn]} onPress={skip}>
                                <Text style={[styles.btnText, { color: COLORS.white }]}>SKIP</Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity onPress={goToNextSlide} style={styles.btn}>
                                <Text style={styles.btnText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                keyExtractor={item => item.id}
                contentContainerStyle={{ height: height * 0.75 }}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: '75%',
        width: '100%',
        // resizeMode: 'contain',
    },
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
        alignSelf: 'center',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    footerContainer: {
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    footerButtons: {
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: COLORS.primary,
    },
    skipBtn: {
        borderColor: COLORS.white,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
});

export default OnboardingScreen;