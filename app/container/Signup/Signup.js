import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { authloginupEmail, authSignupEmail, GoogleSignup } from '../../redux/slice/auth.Slice';

export default function Signup({ route, navigation }) {

    let signupSchema = object({
        name: string().matches(/^[a-zA-Z ]{2,30}$/).required('please enter name'),
        email: string().email().matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required('please enter email'),
        password: string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required('please enter password')
    })

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: signupSchema,
        onSubmit: values => {
            dispatch(authSignupEmail(values))
        }
    })

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik

    return (
        <View style={Styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
      
            <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 40, color: '#222222', margin: 20 }}>
                Sign up
            </Text>
            <TextInput
                name='name'
                style={Styles.input}
                placeholder='Name'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
            />
            {errors.name && touched.name ? <Text style={{ color: 'red', paddingLeft: 25 }}>{errors.name}</Text> : null}
            <TextInput
                name='email'
                style={Styles.input}
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            {errors.email && touched.email ? <Text style={{ color: 'red', paddingLeft: 25 }}>{errors.email}</Text> : null}
            <TextInput
                name='password'
                style={Styles.input}
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
            {errors.password && touched.password ? <Text style={{ color: 'red', paddingLeft: 25 }}>{errors.password}</Text> : null}
            <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={Styles.already}>
                Already have an account?
            </Text></TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleSubmit}>
                <Text style={Styles.Sign}>Sign up</Text>
            </TouchableOpacity>
            <View>
                <Text style={Styles.social}>
                    Or Sign up with social account
                </Text>
            </View>
            <View style={Styles.mainview}>
                <TouchableOpacity style={Styles.facebook}><FontAwesome name="facebook-square" size={45} color="#23527C" /></TouchableOpacity>
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
    already: {
        marginTop: 50,
        paddingLeft: 110,
        color: '#222222',
        textAlign: 'center'
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
        marginTop: 20,
    },
    social: {
        textAlign: 'center',
        marginVertical: 80,
        color: '#222222'
    },
    facebook: {
        paddingHorizontal: 13,
    },
    mainview: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    }
})
