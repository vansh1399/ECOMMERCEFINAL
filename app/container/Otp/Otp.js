import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import OTPTextInput from 'react-native-otp-textinput';

export default function Otp() {
    const otpInputRef = useRef(null);

    const clearText = () => {
        if (otpInputRef.current) {
            otpInputRef.current.clear();
        }
    }

    const setText = () => {
        if (otpInputRef.current) {
            otpInputRef.current.setValue('7096')
        }
    }

    return (
        <View>
            <OTPTextInput ref={otpInputRef} />
            <View style={styles.btnhead}>
                <TouchableOpacity style={styles.btnedit} onPress={() => clearText()}>
                    <Text style={styles.btnText}>Clear</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnhead}>
                <TouchableOpacity style={styles.btnedit} onPress={() => setText()}>
                    <Text style={styles.btnText}>Set Text</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnhead}>
                <TouchableOpacity style={styles.btnedit}>
                    <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    btnhead: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    btnedit: {
        width: "90%",
        height: 40,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
    }
})