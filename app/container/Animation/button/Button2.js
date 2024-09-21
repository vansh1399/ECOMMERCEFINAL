import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Path } from 'react-native-svg'; // For rendering the icon

export default function StaticButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.borderContainer}>
                    <LinearGradient
                        colors={['#007cf0', '#00dfd8', '#ff0080', '#007cf0']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientBorder}
                    />
                </View>
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
