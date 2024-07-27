import { View, Text, TouchableOpacity, ScrollView, StatusBar, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale } from '../../Metrics';


const useaddresses = [
    {
        id: 1,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
        
    },
    {
        id: 2,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
    },
    {
        id: 3,
        name: 'Jane Doe',
        Addresses: '3 Newbridge Court',
        area: 'Chino Hills, CA 91709,',
        state: 'United States',
    },
];

export default function ShippingAddresses({ route, navigation }) {
    const ShippingAddresses = ({ v }) => (
        <View style={styles.olldeta}>
            <Text style={styles.addtext1}>{v.name}</Text>
            <Text style={styles.addtext}>{v.Addresses}</Text>
            <Text style={styles.addtext}>{v.area} {v.state}</Text>

            <TouchableOpacity style={styles.UseShipping}>
                <FontAwesome name="check-square" size={25} color="black" />
                <Text style={styles.checkicontext}>Use as the shipping address</Text>
            </TouchableOpacity>
            <View style={styles.ViewEdit}>
                <TouchableOpacity><Text style={styles.ViewEdittext}>Edit</Text></TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'transparent'} />
            {/* 
            <View style={styles.Ordertext}>
                <TouchableOpacity><FontAwesome name="angle-left" size={35} color="black" /></TouchableOpacity>
                <View style={styles.viewshipping}>
                    <Text style={styles.Ordertext2}>Shipping Addresses</Text>
                </View>
            </View> */}

            <FlatList
                data={useaddresses}
                renderItem={({ item }) => <ShippingAddresses v={item} />}
                keyExtractor={item => item.id}
            />
            <View>

            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btnplaceorder} onPress={() => navigation.navigate("success")}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'Metropolis-Medium', marginTop: 7 }}>Place Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate("shipping") }}>
                    <MaterialCommunityIcons name="plus-circle" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: horizontalScale(19),
        paddingTop: horizontalScale(13),
    },
    Ordertext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: horizontalScale(10),
    },
    Ordertext2: {
        color: 'black',
        fontFamily: 'Metropolis-Bold',
        fontSize: moderateScale(18),
        paddingTop: horizontalScale(8),
    },
    viewshipping: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    olldeta: {
        padding: 15,
        height: 135,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: horizontalScale(5),
        elevation: 2,
        position: 'relative'
    },
    addtext: {
        color: 'black',
        paddingBottom: 4,
    },
    addtext1: {
        color: 'black',
        paddingBottom: 4,
        fontSize: 16
    },
    UseShipping: {
        flexDirection: 'row',
        columnGap: 9,
        paddingTop: 15
    },
    checkicontext: {
        color: 'black',
        paddingTop: 4,
    },
    ViewEdit: {
        position: 'absolute',
        padding: 10,
        right: 10,
    },
    ViewEdittext: {
        color: 'red',
        paddingTop: 4,
    },
    addButton: {
        paddingTop: 16
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btnplaceorder: {
        width: "45%",
        height: 40,
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 15,
        marginRight: 140
    },
    flyingContainer: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    icon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    likesCount: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});