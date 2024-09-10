import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maainpage from '../container/Mainpage/Maainpage';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import My_Bag from '../container/My_Bag/My_Bag';
import My_Orders from '../container/My_Orders/My_Orders';
import Login from '../container/Login/Login';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AddShiipingStack, BagStack, FavouriteStack, HomeStack, ProductStack, ShopStack } from './StakeNavigator';
import ProductCard from '../container/ProductCard/ProductCard';
import Forget from '../container/Forget/Forget';
import My_Profile from '../container/My_Profile/My_Profile';
import { useDispatch, useSelector } from 'react-redux';
import { authloginupEmail } from '../redux/slice/auth.Slice';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../container/Signup/Signup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

function HeaderBarLeft({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            title="Cancel"
            color="#fff">
            <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
        </TouchableOpacity>
    )
}

const Tab = createBottomTabNavigator();


export default function BottamTab() {

    const auth = useSelector(state => state.auth);
    console.log('authhhhhhhhh', auth.auth);

    return (
        auth.auth ?
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'FavouriteTab') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if (route.name === 'productTab') {
                        iconName = focused ? 'bag-suitcase' : 'bag-suitcase-outline';
                    }
                    else if (route.name === 'My_bagTab') {
                        iconName = focused ? 'heart' : 'cards-heart-outline';
                    } else if (route.name === 'order_detailsTab') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen options={{
                    tabBarLabel: 'Home',
                    headerShown: false
                }} name="HomeTab" component={HomeStack} />

                <Tab.Screen options={{

                    tabBarLabel: 'Shop',
                    // tabBarIcon: ({ color, size }) => (
                    //     <Entypo name="shopping-cart" color={color} size={20} />
                    // ),
                    headerShown: false
                }} name="FavouriteTab" component={ShopStack} />
                <Tab.Screen options={{
                    tabBarLabel: 'Bag',
                    // tabBarIcon: ({ color, size }) => (
                    //     <Entypo name="shop" color={color} size={20} />
                    // ),
                    headerShown: false
                }} name="productTab" component={ProductStack} />
                <Tab.Screen options={{
                    tabBarLabel: 'Favourite',
                    // tabBarIcon: ({ color, size }) => (
                    //     <EvilIcons name="heart" color={color} size={28} />
                    // ),
                    headerShown: false
                }} name="My_bagTab" component={BagStack} />

                <Tab.Screen options={{
                    tabBarLabel: 'Profile',
                    // tabBarIcon: ({ color, size }) => (
                    //     <FontAwesome name="user" color={color} size={20} />
                    // ),
                    headerShown: false
                }} name="order_detailsTab" component={AddShiipingStack} />

            </Tab.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name='signup' component={Signup} options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })} />
                <Stack.Screen name='login' component={Login} options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />

                })} />
            </Stack.Navigator>



    )
}