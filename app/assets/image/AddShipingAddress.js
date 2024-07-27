import { View, Text, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics'
import React from 'react'

export default function AddShipingAddress() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            
            <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Add shipping address</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Full name'
                    placeholderTextColor='#9B9B9B'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Adrress'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                />
                <TextInput
                    style={styles.input}
                    placeholder='City'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                />
                <TextInput
                    style={styles.input}
                    placeholder='State/Province/Region'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Zip Code (Postal Code)'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                />
                <View style={styles.countryView}>
                    <TextInput
                        style={styles.input}
                        placeholder='Country'
                        autoCapitalize="none"
                        placeholderTextColor='#9B9B9B'
                    />
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="black" style={styles.Arrow} />

                </View>
            </View>
            <TouchableOpacity style={styles.ButtonView}><View style={styles.ButtonUnderView}>
                <Text style={styles.AddCart}>SAVE ADDRESS</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: '#F9F9F9'
    },
    ArrowView: {
        width: '100%',
        height: verticalScale(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: verticalScale(32)
    },
    ArrowText: {
        color: 'black',
        fontSize: moderateScale(23),
        marginTop: verticalScale(50),
        fontFamily: 'Metropolis-SemiBold',
        marginRight: horizontalScale(75),
    },
    KeyboardArrow: {
        marginTop: verticalScale(40),
        marginLeft: horizontalScale(-12)
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingLeft: horizontalScale(10),
        color: 'white',
        borderRadius: moderateScale(5),
        fontSize: moderateScale(18),
        fontWeight: '500',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 3,
    },
    countryView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Arrow: {
        position: 'absolute',
        right: 9,
        bottom: 30
    },
    ButtonView: {
        width: '100%',
        height: verticalScale(120),
        marginTop: verticalScale(20)
    },
    ButtonUnderView: {
        backgroundColor: '#DB3022',
        width: horizontalScale(340),
        height: verticalScale(50),
        margin: 'auto',
        borderRadius: moderateScale(50),

    },
    AddCart: {
        color: '#FFFFFF',
        fontFamily: 'Metropolis-Medium',
        fontSize: moderateScale(16),
        margin: 'auto'
    },

})