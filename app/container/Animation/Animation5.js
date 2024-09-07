//Movie image Animation//

import { View, Text, Animated, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'

const data = [
  require('../../assets/image/venom.jpg'),
  require('../../assets/image/spiderman.jpg'),
  require('../../assets/image/batman.jpg'),
  require('../../assets/image/superman.jpg'),
  require('../../assets/image/hulk.jpg'),
  require('../../assets/image/thor1.jpg'),
]

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Animated.FlatList
        data={data}
        keyExtractor={({ item, index }) => index}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateY = scrollX.interpolate({
            inputRange,
            // outputRange: [-width * .7, 0, width * 0.7]
            outputRange: [-500, 0, 500]
          })
          // const translateX=scrollX.interpolate({
          //   inputRange,
          //   outputRange: [-500, 0,500]
          // })
          return (
            <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  shadowOpacity: 20,
                  shadowRadius: 10,
                  shadowOffset: { x: 0, y: 0 },
                  shadowColor: '#000',
                  // borderRadius:20,
                  borderWidth: 20,
                  borderColor: '#FFF',
                  elevation: 40
                }}>
                <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, overflow: 'hidden', alignItems: 'center' }}>
                  <Animated.Image
                    source={item}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      // transform: [{ translateX: translateX }],
                      transform: [{ translateY: translateY }]
                    }} />
                </View>
              </View>
            </View>
          )
        }} />
    </View>

  )
}

export default App;
