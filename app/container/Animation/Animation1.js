// import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
// import React, { useRef } from 'react'

// export default function Animation1() {
//     const scale = useRef(new Animated.Value(1)).current;

//     const startAnimation = () => {
//         Animated.spring(scale, {
//             toValue: 1.5, // Scale the circle up to 1.5x its size
//             useNativeDriver: true,
//         }).start(() => {
//             Animated.spring(scale, {
//                 toValue: 1, // Bring it back to the original size
//                 useNativeDriver: true,
//             }).start();
//         });
//     }

//     return (
//         <View style={styles.container}>
//             <Animated.View style={[styles.circle, { transform: [{ scale }] }]}></Animated.View>
//             <View style={styles.btnview}>
//                 <TouchableOpacity onPress={startAnimation}>
//                     <Text style={styles.btnText}>Start Animation</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white'
//     },
//     circle: {
//         width: 100.0,
//         height: 100.0,
//         backgroundColor: 'rgba(0,0,256,0.5)',
//         borderRadius: 50, // Making it a circle
//     },
//     btnview: {
//         width: '50%',
//         height: 50,
//         backgroundColor: 'black',
//         borderRadius: 10,
//         marginTop: 80,
//         justifyContent: 'center',
//     },
//     btnText: {
//         textAlign: 'center',
//         fontSize: 16,
//         color: 'white',
//     }
// })
