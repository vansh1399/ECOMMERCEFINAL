import React, { useState } from 'react';
import { View, StatusBar, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import Slider from '@react-native-community/slider';


export default function Filter() {
    const [price, setPrice] = useState(78);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedCategory, setselectedCategory] = useState(null);
    const [selctbrand, setselctbrand] = useState(null)

    const size = ['XS', 'S', 'M', 'L', 'XL'];

    const selectSize = (size) => {
        setSelectedSize(size);
    };



    const categories = ['All', 'Women', 'Men', 'Boys', 'Girls'];

    const selectCategory = (category) => {
        setselectedCategory(category);
    };

    return (
        <View style={style.mainContainer}>
            <View style={style.bodyContainer}>
                <ScrollView >
                    <StatusBar
                        barStyle="dark-content"
                        translucent backgroundColor='white'
                    />

                    <View style={style.titlebar}>
                        <MaterialIcons name='chevron-left' size={30} color='black'></MaterialIcons>
                        <Text style={style.filtertext}>Filters</Text>
                    </View>

                    <Text style={style.text}>Price range</Text>
                    <View style={style.viewstyle}>
                        <Slider
                            style={style.Slider}
                            step={1}
                            minimumValue={0}
                            maximumValue={200}
                            minimumTrackTintColor="#DB3022"
                            maximumTrackTintColor="#d3d3d3"
                            thumbTintColor="#DB3022"
                            value={price}
                            onValueChange={val => setPrice(val)}
                        />
                        <View style={style.textCon}>
                            <Text style={style.colorYellow}>
                                {price + '$'}
                            </Text>
                        </View>
                    </View>

                    <Text style={style.text}>Colors</Text>
                    <View style={style.circleview}>
                        <TouchableOpacity style={style.circle1}></TouchableOpacity>
                        <TouchableOpacity style={style.circle2}></TouchableOpacity>
                        <TouchableOpacity style={style.circle3}></TouchableOpacity>
                        <TouchableOpacity style={style.circle4}></TouchableOpacity>
                        <TouchableOpacity style={style.circle5}></TouchableOpacity>
                        <TouchableOpacity style={style.circle6}></TouchableOpacity>
                    </View>

                    <Text style={style.text}>Sizes</Text>
                    <View style={style.sizeview}>
                        {size.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    style.sizeButton,
                                    selectedSize === size && style.selectedSizeButton,
                                ]}
                                onPress={() => selectSize(size)}
                            >
                                <Text
                                    style={[
                                        style.sizetext,
                                        selectedSize === size && style.selectedSizetext,
                                    ]}
                                >
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}

                    </View>

                    <Text style={style.text}>Category</Text>
                    <View style={style.categoryview}>
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    style.categoryButton,
                                    selectedCategory === category && style.selectedCategoryButton,
                                ]}
                                onPress={() => selectCategory(category)}
                            >
                                <Text
                                    style={[
                                        style.categorytext,
                                        selectedCategory === category && style.selectedCategorytext,
                                    ]}
                                >
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View>
                        <View style={style.brandview}>
                            <View>
                                <Text style={style.text}>Brand</Text>
                                <Text style={{ paddingLeft: 16, fontFamily: 'Metropolis-Regular', fontSize: 11 }}>addidas,Originals,Jack & Jones , s.Oliver</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' size={30} style={style.righticon}></MaterialIcons>
                        </View>

                        <View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>addidas</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>addidas Original</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Blend</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Boutique Moschino</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Champion</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Diesel</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Jack & Jones</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Naf Naf</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>Red Valentino</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                            <View style={style.brandfilter}>
                                <Text style={style.brandname}>s.Oliver</Text>
                                <CheckBox style={style.CheckBox}></CheckBox>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={style.applayview}>
                <View style={style.buttonview}>
                    <TouchableOpacity style={style.discardbutton}><Text style={style.buttontext1}>Discard</Text></TouchableOpacity>
                    <TouchableOpacity style={style.applybutton} ><Text style={style.buttontext2}>Apply</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    titlebar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: horizontalScale(16),
        paddingTop: verticalScale(15),
        backgroundColor: 'white'
    },
    filtertext: {
        fontSize: moderateScale(18),
        fontFamily: 'Metropolis-Black',
        color: 'black',
        marginHorizontal: 'auto'
    },
    text: {
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Black',
        color: 'black',
        marginTop: verticalScale(10),
        paddingLeft: horizontalScale(16),
    },
    viewstyle: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
    },
    Slider: {
        width: '94%',
        backgroundColor: 'white',
    },
    circleview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    circle1: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: 'black'
    },
    circle2: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#F6F6F6'
    },
    circle3: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#B82222'
    },
    circle4: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#BEA9A9'
    },
    circle5: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#E2BB8D'
    },
    circle6: {
        height: verticalScale(36),
        width: horizontalScale(36),
        borderRadius: 30,
        backgroundColor: '#151867'
    },
    sizeview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    sizeButton: {
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: 9,
        marginRight: verticalScale(20),
        borderWidth: 0.5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    selectedSizeButton: {
        backgroundColor: '#DB3022',
    },
    sizetext: {
        textAlign: 'center',
        color: 'black',
    },
    selectedSizetext: {
        color: 'white',
    },
    categoryview: {
        marginTop: verticalScale(35),
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: verticalScale(30),
        paddingLeft: horizontalScale(16),
        paddingRight: horizontalScale(16),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryButton: {
        width: horizontalScale(100),
        height: verticalScale(40),
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        marginRight: horizontalScale(10),
        marginBottom: verticalScale(9),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    selectedCategoryButton: {
        backgroundColor: '#DB3022',
    },
    categorytext: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular'
    },
    selectedCategorytext: {
        color: 'white',
    },
    brandview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    righticon: {
        marginRight: horizontalScale(10),
        color: 'black',
    },
    SearchBar: {
        width: horizontalScale('90%'),
        paddingLeft: horizontalScale(16),
        marginTop: verticalScale(20),
    },
    brandname: {
        paddingLeft: horizontalScale(16),
        color: 'black',
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Regular'
    },
    brandfilter: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CheckBox: {
        marginRight: horizontalScale(16),
    },
    applayview: {
        width: '100%',
        flex: 1.5,
        backgroundColor: 'white',
        marginTop: verticalScale(15)
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    bodyContainer: {
        flex: 10
    },
    discardbutton: {
        width: horizontalScale(160),
        borderWidth: 1,
        borderColor: 'black',
        height: verticalScale(40),
        borderRadius: 20,
        paddingTop: verticalScale(8)
    },
    applybutton: {
        width: horizontalScale(160),
        height: verticalScale(40),
        backgroundColor: '#DB3022',
        borderRadius: 20,
        paddingTop: verticalScale(8)
    },
    buttonview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: verticalScale(25)
    },
    buttontext1: {
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
        color: 'black'
    },
    buttontext2: {
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
        color: 'white'
    },
    colorYellow: {
        color: 'black',
        fontSize: 20,
    }
});
