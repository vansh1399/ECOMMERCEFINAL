import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';


export default function Success({route,navigation}) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View>
        <TouchableOpacity>
          <Image
            style={Styles.img}
            source={require('../../assets/image/success.img.png')}></Image>
        </TouchableOpacity>
      </View>

      <Text style={Styles.successText}>Success!</Text>
      <Text style={Styles.TextThankyou}>
        Your order will be delivered soon.
      </Text>
      <Text style={Styles.TextThankyou}>Thank you for choosing our app!</Text>

      <View>
        <TouchableOpacity>
          <Text style={Styles.continueShpBtn} onPress={()=>{navigation.navigate("Home")}}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  img: {
    flex: 1,
    // width: horizontalScale(300),
    alignSelf: 'center',
    marginHorizontal: horizontalScale(35),
    marginTop: verticalScale(150),
  },
  successText: {
    textAlign: 'center',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(40),
    color: '#000000',
    marginTop: verticalScale(30),
  },
  TextThankyou: {
    fontFamily: 'Metropolis-Regular',
    color: '#000000',
    textAlign: 'center',
    marginTop: verticalScale(2),
    lineHeight: 18,
  },
  continueShpBtn: {
    paddingHorizontal: horizontalScale(90),
    paddingVertical: verticalScale(10),
    alignSelf: 'center',
    backgroundColor: '#DB3022',
    color: '#FFFFFF',
    borderRadius: moderateScale(50),
    textAlign: 'center',
    marginTop: verticalScale(150),
    
  },
});
