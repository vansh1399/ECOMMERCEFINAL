import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'


export default function Animation() {
    const progress=useRef(new Animated.Value(0.5)).current; //useSharedValue(0)
    const scale=useRef(new Animated.Value(1)).current;

    useEffect(()=>{
        //With Timing// & //With Spring//
        //With Repeat
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.spring(progress,{toValue:1,useNativeDriver:true}),
                    Animated.spring(progress,{toValue:0.5,useNativeDriver:true}),
                ]),
                Animated.sequence([
                    Animated.spring(scale,{toValue:2,useNativeDriver:true}),
                    Animated.spring(scale,{toValue:1,useNativeDriver:true}),
                ]),
            ]),
            {iterations:3}
        ).start();
    },[])
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square,
        {
            borderRadius:progress.interpolate({
                inputRange:[0.5,1],
                outputRange:[SIZE / 4,SIZE /2],
            }),
            opacity:progress,
            transform:[
                {scale},
                {
                    rotate:progress.interpolate(
                        {
                            inputRange:[0.5,1],
                            outputRange:['180deg', '360deg'],
                        }
                    ),
                },
            ],
        },
      ]}
      ></Animated.View>
    </View>
  )
}

const SIZE=100.0;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    square:{
        width:100.0,
        height:100.0,
        backgroundColor:'rgba(0,0,256,0.5)',
    },
});