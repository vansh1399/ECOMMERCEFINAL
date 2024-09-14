import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { OtpNo, phoneAuth } from '../../redux/slice/auth.Slice';


export default function Phone_number({ route, navigation }) {

    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth)
    console.log('auth1', auth.confirmation);


    let PhonenumberSchema = object({
        phone_number: string().required('please enter your valid mobile number'),
    })

    const formik = useFormik({
        initialValues: {
            phone_number: '',
        },
        validationSchema: PhonenumberSchema,
        onSubmit: values => {
            console.log('wowwwwwww', values);
            dispatch(phoneAuth({ phone: values.phone_number }))
        }
    })

    let OtpSchema = object({
        otp: string().required()
    })

    const formik1 = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: OtpSchema,
        onSubmit: values => {
            console.log('vansh', values.otp);
            dispatch(OtpNo({ confirm: auth.confirmation, code: values.otp }))
        }
    })


    if (!auth.confirmation) {
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
                    onChangeText={formik.handleChange('phone_number')}
                    onBlur={formik.handleBlur('phone_number')}
                />
                <View style={Styles.signhead}>
                    <TouchableOpacity style={Styles.signedit} onPress={formik.handleSubmit}>
                        <Text style={Styles.SignText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={Styles.social}>
                        Forgot your Password
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={Styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 30, color: '#222222', margin: 30, marginTop: 40 }}>
                Verify Otp
            </Text>
            <TextInput
                name='Otp'
                style={Styles.input}
                placeholder='Enter Otp'
                onChangeText={formik1.handleChange('otp')}
                onBlur={formik1.handleBlur('otp')}
            />
            <View style={Styles.signhead}>
                <TouchableOpacity style={Styles.signedit} onPress={formik1.handleSubmit}>
                    <Text style={Styles.SignText}>Otp</Text>
                </TouchableOpacity>
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
    signhead: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    signedit: {
        width: "80%",
        height: 40,
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#DB3022',
    },
    SignText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Metropolis-ExtraBold',
    },
    social: {
        textAlign: 'center',
        marginVertical: 10,
        marginLeft: 120,
        color: '#222222'
    },
})

