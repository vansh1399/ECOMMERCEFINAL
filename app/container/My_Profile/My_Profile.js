import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  a,
  Image,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect } from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { useDispatch } from 'react-redux';
import { authsignOut } from '../../redux/slice/auth.Slice';


export default function My_Profile({ route, navigation }) {

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(authsignOut());
    navigation.navigate('signup')

  }
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={Styles.container}>
        <Text style={Styles.myProfile}>My Profile</Text>

        <View style={Styles.profileHead}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={Styles.Profileimg}
              source={require('../../assets/image/fashion_girl_img7.png')}
            />
          </TouchableOpacity>

          <View style={Styles.matildabrownTextMAin}>
            <Text style={Styles.matildabrownText}>Matilda Brown</Text>
            <Text style={Styles.matildabrowngmailText}>
              matildabrown@mail.com
            </Text>
          </View>
        </View>

        <View style={Styles.datamain}>
          <TouchableOpacity style={Styles.dataHead} onPress={() => { navigation.navigate("My Orders") }}>
            <View>
              <Text style={Styles.data1}>My orders</Text>
              <Text style={Styles.data2}>Already have 12 orders</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => { navigation.navigate("My Orders") }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.dataHead} onPress={() => navigation.navigate("Shipping Address")}>
            <View>
              <Text style={Styles.data1}>Shipping addresses</Text>
              <Text style={Styles.data2}>3 ddresses</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Shipping Address")}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Payment methods</Text>
              <Text style={Styles.data2}>Visa **34</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Promocodes</Text>
              <Text style={Styles.data2}>You have special promocodes</Text>
            </View>


            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={Styles.dataHead} onPress={() => navigation.navigate("Rating")}>
            <View>
              <Text style={Styles.data1}>My reviews</Text>
              <Text style={Styles.data2}>Reviews for 4 items</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Rating")}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={Styles.dataHead}>
            <View>
              <TouchableOpacity onPress={() => handleSignOut()}><Text style={Styles.data1}>Sign out</Text></TouchableOpacity>

              <Text style={Styles.data2}>you want to go to exist</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),

  },
  myProfile: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(34),
    color: '#222222',
  },
  Profileimg: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  profileHead: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
  matildabrownTextMAin: {
    padding: horizontalScale(16),
    padding: verticalScale(16),
  },
  matildabrownText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(22),
    color: '#222222',
  },
  matildabrowngmailText: {
    fontFamily: 'Metropolis-Medium',
    fontSize: moderateScale(14),
    color: '#9B9B9B',
  },
  dataHead: {
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0.2,
  },
  data1: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(20),
    lineHeight: 40,
    color: '#222222',
    marginTop: verticalScale(5),
  },
  data2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(13),
    color: '#9B9B9B',
  },
  datamain: {
    fontFamily: 'Metropolis-Regular',
    marginTop: verticalScale(25),
  },
});
