import { View, Text, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { shippingAddByget } from '../../redux/slice/ShippingAddress.Slice';
import { useFormik } from 'formik';
import { object, string } from 'yup';




export default function AddShipingAddress({ route, navigation }) {
    const dispatch = useDispatch();

    const handleSubmit1 = (data) => {
        console.log('kkkk', data);
        dispatch(shippingAddByget({ ...data, uid: 'ankit' }))

    }

    let userSchema = object({
        Full_name: string().matches(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).required('please enter valid name'),
        Adrress: string().matches(/^[a-zA-Z0-9\s\,\''\-]*$/).required('please enter valid Adrress'),
        City: string().matches(/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/).required('please enter valid Adrress'),
        Region: string().required('please enter valid Region'),
        Zip_Code: string().matches().required('please enter valid Zip_Code'),
        Country: string().matches(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).required('please enter valid  Country'),
    });

    const formik = useFormik({
        initialValues: {
            Full_name: '',
            Adrress: '',
            City: '',
            Region: '',
            Zip_Code: '',
            Country: ''
        },
        validationSchema: userSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmit1(values)
        }
    })


    const { handleBlur, handleChange, handleSubmit, onSubmit, errors, values, touched, resetForm } = formik

    // const shippingAddRess = useSelector(state => state.Shippingaddress)
    // console.log('ssssssss', shippingAddRess?.shippingAddress[0]?.address);
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            {/* <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Add shipping address</Text>
            </View> */}
            <View style={{ marginTop: 5 }}>
                <TextInput
                    style={styles.input}
                    placeholder='Full name'
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('Full_name')}
                    onBlur={handleBlur('Full_name')}
                    value={values.Full_name}
                />
                <Text style={{ color: 'red' }}>{errors.Full_name && touched.Full_name ? errors.Full_name : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Adrress'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('Adrress')}
                    onBlur={handleBlur('Adrress')}
                    value={values.Adrress}
                />
                <Text style={{ color: 'red' }}>{errors.Adrress && touched.Adrress ? errors.Adrress : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='City'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('City')}
                    onBlur={handleBlur('City')}
                    value={values.City}
                />
                <Text style={{ color: 'red' }}>{errors.City && touched.City ? errors.City : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='State/Province/Region'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('Region')}
                    onBlur={handleBlur('Region')}
                    value={values.Region}
                />
                <Text style={{ color: 'red' }}>{errors.Region && touched.Region ? errors.Region : ''}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Zip Code (Postal Code)'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'
                    onChangeText={handleChange('Zip_Code')}
                    onBlur={handleBlur('Zip_Code')}
                    value={values.Zip_Code}
                />
                <Text style={{ color: 'red' }}>{errors.Zip_Code && touched.Zip_Code ? errors.Zip_Code : ''}</Text>
                <View style={styles.countryView}>
                    <TextInput
                        style={styles.input}
                        placeholder='Country'
                        autoCapitalize="none"
                        placeholderTextColor='#9B9B9B'
                        onChangeText={handleChange('Country')}
                        onBlur={handleBlur('Country')}
                        value={values.Country}
                    />
                    <Text style={{ color: 'red' }}>{errors.Country && touched.Country ? errors.Country : ''}</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="black" style={styles.Arrow} />

                </View>
            </View>
            <TouchableOpacity style={styles.ButtonView} onPress={()=>{handleSubmit(); navigation.navigate("Shipping Addresss")} }><View style={styles.ButtonUnderView}>
                {/* onPress={()=>{navigation.navigate("Shipping Address")}} */}
                <Text style={styles.AddCart}>SAVE ADDRESS</Text>
            </View>
        </TouchableOpacity>
        </ScrollView >
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
        color: 'black',
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