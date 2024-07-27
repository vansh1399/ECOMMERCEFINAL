import { View, Text, StatusBar, StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Signup() {
    return (
        <View style={Styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <View style={{ marginTop: 20 }}>
                <EvilIcons name="chevron-left" size={45} color="black" />
            </View>
            <Text style={{fontFamily:'Metropolis-Bold',fontSize:40,color:'#222222',margin:20}}>
                Sign up
            </Text>
            <TextInput
                style={Styles.input}
                placeholder='Name'
            />
               <TextInput
                style={Styles.input}
                placeholder='Email'
            />
               <TextInput
                style={Styles.input}
                placeholder='Password'
            />
            <Text style={Styles.already}>
                Already have an account?
            </Text>
            <TouchableOpacity style={{alignItems:'center'}}>
                <Text style={Styles.Sign}>Sign up</Text>
            </TouchableOpacity>
            <View>
                <Text style={Styles.social}>
                    Or Sign up with social account
                </Text>
            </View>
            <View style={Styles.mainview}>
                <TouchableOpacity style={Styles.facebook}><FontAwesome  name="facebook-square" size={45} color="#23527C"/></TouchableOpacity>
            </View>
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F4F4F4'
    },
    input:{
        height: 40,
        margin: 20,
        borderWidth: 0,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        
    },
    already:{
        color:'#222222',
        textAlign:'center'
    },
    Sign:{
        width:'80%',
        height:50,
        backgroundColor:'#DB3022',
        borderRadius:50,
        textAlign:'center',
        padding:10,
        fontFamily:'Metropolis-ExtraBold',
        color:'#FFFFFF',
        fontSize:18,
        marginTop:30,
    },
    social:{
        textAlign:'center',
        marginVertical:80,
        color:'#222222'
    },
    facebook:{
       paddingHorizontal:13,
    },
    mainview:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20
    }

})
