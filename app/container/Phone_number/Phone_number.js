import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { PhoneNumber } from '../../redux/slice/auth.Slice'

export default function Login() {

    let PhonenumberSchema = object({
        phone_number: string().matches(/^[0-9]{10}$/).required('please enter your valid mobile number')
    })

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            phone_number: ''
        },
        validationSchema: PhonenumberSchema,
        onSubmit: values => {
            dispatch(PhoneNumber());
        }
    })

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

    return (
        <View style={Styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 30, color: '#222222', margin: 30, marginTop: 40 }}>
                Phone number
            </Text>
            <TextInput
                name='Phone number'
                style={Styles.input}
                placeholder='Phone number'
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                value={values.phone_number}
            />
            {errors.phone_number && touched.phone_number ? <Text style={{ color: 'red', marginLeft: 25 }}>{errors.phone_number}</Text> : null}

            <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleSubmit}>
                <Text style={Styles.Sign}>OTP</Text>
            </TouchableOpacity>
            <View>
                <Text style={Styles.social}>
                    Forgot your Password
                </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    input: {
        height: 40,
        margin: 20,
        borderWidth: 0,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    Sign: {
        width: '80%',
        height: 50,
        backgroundColor: '#DB3022',
        borderRadius: 50,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'Metropolis-ExtraBold',
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 90,
    },
    social: {
        textAlign: 'center',
        marginVertical: 10,
        marginLeft: 120,
        color: '#222222'
    },
})