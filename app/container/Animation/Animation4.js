//image and intro Animation screen//

import { View, Text, FlatList, Dimensions, TouchableOpacity, ScrollView, Animated } from 'react-native';
import React, { useRef, useState } from 'react';

const { height, width } = Dimensions.get('window');

export default function Animation4() {
    const [data, setData] = useState([1, 1, 1, 1, 1]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: height / 2 + 100, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.FlatList
                    ref={ref}
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => {
                        const x = e.nativeEvent.contentOffset.x;
                        const index = Math.round(x / width); // Get the nearest index
                        setCurrentIndex(index); // Update currentIndex state
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <Animated.View style={{
                                width: width,
                                height: currentIndex === index ? height / 2 + 50 : height / 2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            
                            >
                                <TouchableOpacity
                                    disabled={true}
                                    style={{
                                        width: '90%',
                                        height: '90%',
                                        backgroundColor: currentIndex === index ? 'green' : 'gray',
                                        borderRadius: 10
                                    }}>
                                </TouchableOpacity>
                            </Animated.View>
                        );
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
                {
                    data.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: currentIndex === index ? 30 : 8,
                                    height: currentIndex === index ? 10 : 8,
                                    borderRadius: currentIndex === index ? 5 : 4,
                                    backgroundColor: currentIndex === index ? 'orange' : 'gray',
                                    marginLeft: 5
                                }}
                            />
                        );
                    })
                }
            </View>

            <View style={{ width: width, flexDirection: 'row', marginTop: 80, justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                {currentIndex == 0 ? null : (
                    <TouchableOpacity
                        onPress={() => {
                            setCurrentIndex(currentIndex - 1);
                            ref.current.scrollToIndex({
                                animated: true,
                                index: parseInt(currentIndex) - 1,
                            })
                        }}
                        style={{ width: data.length - 1 == currentIndex ? '100%' : 100, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
                        <Text>Previous</Text>
                    </TouchableOpacity>
                )}

                {data.length - 1 == currentIndex ? null : (
                    <TouchableOpacity
                        onPress={() => {
                            setCurrentIndex(currentIndex + 1);
                            ref.current.scrollToIndex({
                                animated: true,
                                index: parseInt(currentIndex) + 1,
                            })
                        }}
                        style={{ width: currentIndex == 0 ? '100%' : 100, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                )}


            </View>
        </View>

    );
}

