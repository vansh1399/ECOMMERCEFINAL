import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

export default function CategoriesTwo() {
    return (
        <ScrollView>
            <StatusBar
                backgroundColor="#fff"              
                barStyle="dark-content"
            />

            {/* <View style={Styles.viewcategories}>
                <EvilIcons name="chevron-left" size={45} color="black" />
                <Text style={Styles.categories}>Categories</Text>
                <FontAwesome name="search" size={22} color="black" />
            </View> */}

            <View>
                <TouchableOpacity><Text style={Styles.button}>VIEW ALL ITEMS</Text></TouchableOpacity>
                <Text style={Styles.textchoosect}>Choose category</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <TouchableOpacity><Text style={Styles.product}>Tops</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Shirts & Blouses</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Cardigans & Sweaters</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Knitwear</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Blazers</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Outerwear</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Pants</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Jeans</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Shorts</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Skirts</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.product}>Dresses</Text></TouchableOpacity>
            </View>

            {/* <View>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="Signup" component={Signup} />
                </Tab.Navigator>
            </View> */}

        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    viewcategories: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 80,
        padding: 10,
        elevation: 7
    },
    categories: {
        fontFamily: 'Metropolis-Bold',
        color: '#222222',
        fontSize: 18,
    },
    button: {
        width: '90%',
        height: 48,
        backgroundColor: '#DB3022',
        textAlign: 'center',
        fontFamily: 'Metrophobic-Regular',
        fontSize: 14,
        color: '#FFFFFF',
        padding: 12,
        borderRadius: 25,
        marginHorizontal: 18,
        marginTop: 14
    },
    textchoosect: {
        color: '#9B9B9B',
        fontSize: 14,
        marginHorizontal: 22,
        marginTop: 8
    },
    product: {
        width: '100%',
        height: 45,
        marginTop: 3,
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        paddingHorizontal: 40,
        paddingVertical: 14,
        elevation: 0.1
    }
})