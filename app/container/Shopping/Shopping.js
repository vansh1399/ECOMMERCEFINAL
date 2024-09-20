import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Collapsible from 'react-native-collapsible';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { shopByThunk } from '../../redux/slice/Shopping.Slice';
import RBSheet from 'react-native-raw-bottom-sheet';

const data = [
    {
        id: 1,
        title: 'T-shirts',

    },
    {
        id: 2,
        title: 'Crop tops',

    },
    {
        id: 3,
        title: 'Blouses',

    },
    {
        id: 4,
        title: 'Shirt',

    }
]

const Data2 = [
    {
        id: 1,
        img: require('../../assets/image/fashion_boy_img_spykar_12.webp'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 2,
        img: require('../../assets/image/see_you.img.jpg'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 3,
        img: require('../../assets/image/see_you.img.jpg'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 4,
        img: require('../../assets/image/see_you.img.jpg'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    }
]

const items = [('')]; // Example items

const YourOwnComponent = () => (
    <View style={{ padding: 20 }}>
        <Text>This is your own component inside the bottom sheet</Text>
    </View>
);

export default function Shopping({ route, navigation }) {
    const refRBSheet = useRef([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('')

    const renderItem = ({ item, index, refRBSheet }) => {
        console.log('kkkkkkggggkk', item);

        return (
            <View>
                <RBSheet ref={ref => (refRBSheet.current[index] = ref)}>
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.bottommini}>
                            <TouchableOpacity onPress={() => { setSort('lh') }} style={styles.bottombtn}><Text style={styles.bottomSheetText}>  low to high</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSort('hl') }} style={styles.bottombtn}><Text style={styles.bottomSheetText}>  high to low</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSort('az') }} style={styles.bottombtn}><Text style={styles.bottomSheetText}>  A to Z</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSort('za') }} style={styles.bottombtn}><Text style={styles.bottomSheetText}>  Z to A</Text></TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
            </View>
            //  {item + 1}
        );
    };

    console.log('kkkk', route);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(shopByThunk({ cat_id: route.params.cat_id, sub_id: route.params.sub_id }))
    }, [])
    const shoppingA = useSelector(state => state.shopping);

    console.log('ssssssssssssss', shoppingA.Shopping);

    const searchSort = () => {
        console.log('gggggg', search);
        const fData = shoppingA.Shopping.filter((v) => (
            v.Product_name.toLowerCase().includes(search.toLowerCase()) ||
            v.Description.toLowerCase().includes(search.toLowerCase()) ||
            v.Price.toString().includes(search)
        ))
        const SData = fData.sort((a, b) => {
            if (sort === 'az') {
                return a.Product_name.localeCompare(b.Product_name)
            } else if (sort === 'za') {
                return b.Product_name.localeCompare(a.Product_name)
            } else if (sort === 'lh') {
                return a.Price - b.Price
            } else if (sort === 'hl') {
                return b.Price - a.Price
            }
        })
        return SData
    }


    const FinalData = searchSort();



    const ProductCard = ({ v }) => (

        <View style={styles.CategorisView} >
            <View style={styles.Options}><Text style={styles.OptionsText}>{v.title}</Text></View>

        </View>
    )
    const ProductData = ({ v }) => (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => { navigation.navigate("ProductCard", { product: v.id }) }}>
            <View style={styles.productMainView}>

                <View style={styles.productImg}>
                    <Image source={require('../../assets/image/see_you.img.jpg')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                </View>


                <View>
                    <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                </View>


                <View style={styles.productText}>
                    <View style={styles.iconview}>
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <Text style={{ color: '#9B9B9B' }}>(3)</Text>
                    </View>
                    <Text style={styles.mangoText}>{v.Product_name}</Text>
                    <Text style={styles.tShirt}>{v.Description}</Text>
                    <Text style={styles.price}>{v.id}$</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
    return (

        <View style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.ArrowView}>
                {/* <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Women's tops</Text>
                <TouchableOpacity><MaterialIcons name="search" size={30} color="black" style={{ marginTop: 25 }} /></TouchableOpacity> */}
            </View>
            <View style={{ backgroundColor: 'white', marginBottom: 10 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <TouchableOpacity><ProductCard v={item} /></TouchableOpacity>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

                <View style={styles.FilterOptions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("filter")}><MaterialIcons name="filter-list" size={30} color="black" /><Text style={styles.filterText}>Filters</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => refRBSheet.current[0].open()} ><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filterText}>Price:lowest to high</Text></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name="th-list" size={26} color="black" /></TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} >
                    <FlatList
                        data={items}
                        renderItem={(props) => renderItem({ ...props, refRBSheet })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    {/* <Button
                    title="OPEN"
                    onPress={() => refRBSheet.current[0].open()} // Example of opening the first item bottom sheet
                /> */}
                    {/* <RBSheet
                        ref={refRBSheet.current[0]}
                        useNativeDriver={true}
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'transparent',
                            },
                            draggableIcon: {
                                backgroundColor: '#000',
                            },
                        }}
                        customModalProps={{
                            animationType: 'slide',
                            statusBarTranslucent: true,
                        }}
                        customAvoidingViewProps={{
                            enabled: false,
                        }}
                    >
                        <YourOwnComponent />
                    </RBSheet> */}
                </View>


            </View>

            <View>
                <TextInput
                    style={{ width: '100%', backgroundColor: '#FFFFFF', borderRadius: 5, height: 50 }}
                    name='search'
                    placeholder='Search...'
                    onChangeText={setSearch}>
                </TextInput>
            </View>

            <FlatList
                data={FinalData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', columnGap: 10, marginTop: 10 }}
                renderItem={({ item }) => <TouchableOpacity><ProductData v={item} /></TouchableOpacity>}
                keyExtractor={(item, index) => index.toString()}
            // horizontal={true}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#F9F9F9'
    },
    ArrowView: {
        width: '100%',
        // height: 60,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ArrowText: {
        color: 'black',
        fontSize: 23,
        marginTop: 22
    },
    KeyboardArrow: {
        marginTop: 16,
        marginLeft: -15
    },
    CategorisView: {
        paddingRight: horizontalScale(10),
    },
    Options: {
        width: horizontalScale(90),
        height: verticalScale(35),
        backgroundColor: 'black',
        borderRadius: horizontalScale(100),
        justifyContent: 'center',
        alignItems: 'center',

    },
    OptionsText: {
        fontSize: moderateScale(14),
        fontFamily: 'Metropolis-Bold',
        color: 'white',

    },
    FilterOptions: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9',
        marginBottom: verticalScale(20)
    },
    filterText: {
        color: 'black',
        paddingRight: verticalScale(60),
        marginTop: 4,
        marginLeft: 10
    },
    productMainView: {
        width: 160,
        height: 350,
        marginBottom: 40
    },
    productImg: {
        width: '100%',
        height: '68%',
        position: 'relative',
    },
    heart: {
        position: 'absolute',
        bottom: -10,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,

    },
    productText: {
        width: '100%',
        height: '32%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 2
    },
    iconview: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        marginTop: 5,

    },
    mangoText: {
        color: 'black',
        fontSize: 15,
        paddingHorizontal: 6,
        marginTop: 6,
        fontFamily: 'Metropolis-SemiBold'
    },
    tShirt: {
        color: '#9B9B9B',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 18,
        paddingHorizontal: 6,
        marginTop: 3
    },
    price: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Metropolis-Medium',
        paddingHorizontal: 7,
        marginTop: 4
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
    },
    bottombtn: {
        width: "100%",
        height: 30,
        // borderWidth:1,
        borderRadius: 5,
        backgroundColor: '#008CBA',
        elevation: 5
        // padding:3,
    },
    bottomSheetText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Metropolis-Bold',
        marginTop: 5
    },
    bottommini: {
        // flexDirection:'row',
        rowGap: 10,
        // columnGap:10,
        marginTop: 5,
    },
    bottomSheetContainer: {
        margin: 20
    }

})