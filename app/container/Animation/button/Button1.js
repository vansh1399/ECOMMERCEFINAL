import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Button() {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: null,
                // toValue: 1,
                duration: 8000,
                useNativeDriver: true,
            })
        ).start();
    }, [animation]);

    const animatedStyle = {
        transform: [
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.borderContainer, animatedStyle]}>
                <LinearGradient
                    colors={['#007cf0', '#00dfd8', '#ff0080', '#007cf0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.borderGradient}
                >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Button</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    borderContainer: {
        borderRadius: 5,
        padding: 2, // Adjust padding to make space for the border
    },
    borderGradient: {
        borderRadius: 5,
        padding: 2,
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'black', // Button background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Metropolis-Medium',
    },
});
