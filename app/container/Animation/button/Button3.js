import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Path } from 'react-native-svg'; // For rendering the icon

export default function AnimatedButton() {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Loop the animation indefinitely
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: false, // Set to false because we are animating colors
            })
        ).start();
    }, [animation]);

    // Interpolating the gradient colors
    const gradientColors = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [
            'rgba(0, 124, 240, 1)', // #007cf0
            'rgba(255, 0, 128, 1)', // #ff0080
            'rgba(0, 124, 240, 1)', // #007cf0
        ],
    });

    // Animated styles for the gradient and border
    const animatedGradientStyle = {
        borderColor: gradientColors,
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Animated.View style={[styles.borderContainer, animatedGradientStyle]}>
                    <LinearGradient
                        colors={['#007cf0', '#00dfd8', '#ff0080', '#007cf0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientBorder}
                    />
                </Animated.View>
                <View style={styles.buttonContent}>
                    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <Path
                            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                            fill="#fff"
                        />
                    </Svg>
                    <Text style={styles.buttonText}>Collaborate on a Pro Trial</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centering vertically
        alignItems: 'center', // Centering horizontally
        backgroundColor: '#000',
    },
    buttonContainer: {
        position: 'relative',
        padding: 2, // Spacing for the gradient border
    },
    borderContainer: {
        ...StyleSheet.absoluteFillObject, // Fills the parent view
        borderRadius: 8,
        padding: 2, // Ensures the gradient is centered within the border
        borderWidth: 2, // Animated border width
    },
    gradientBorder: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 8,
    },
});
