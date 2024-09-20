import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getfav, googleFavourite } from '../../redux/slice/Favourite.Sice';
import { getProduct } from '../../redux/slice/Product.Slice';
import { fetchCategories } from '../../redux/slice/category.slice';
import { getFilter } from '../../redux/slice/Filter.Slice';
import { getFilterBrand } from '../../redux/slice/Brand.Slice';
import { shopByThunk } from '../../redux/slice/Shopping.Slice';

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
// const Data2 = [
//     {
//         id: 1,
//         img: require('../../assets/image/see_you.img.jpg'),
//         title: 'Mango',
//         SubTitle: 'T-Shirt SPANISH',
//         price: 9
//     },
//     {
//         id: 2,
//         img: require('../../assets/image/see_you.img.jpg'),
//         title: 'Mango',
//         SubTitle: 'T-Shirt SPANISH',
//         price: 9
//     },
//     {
//         id: 3,
//         img: require('../../assets/image/see_you.img.jpg'),
//         title: 'Mango',
//         SubTitle: 'T-Shirt SPANISH',
//         price: 9
//     },
//     {
//         id: 4,
//         img: require('../../assets/image/see_you.img.jpg'),
//         title: 'Mango',
//         SubTitle: 'T-Shirt SPANISH',
//         price: 9
//     }
// ]

export default function FavouritePage({ route, navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getfav());
    }, [])

    const shoppingA = useSelector(state => state.product);
    // console.log('shoppppppppp', shoppingA.Shopping);

    const favouriteA = useSelector(state => state.fav)
    // console.log('fffffffffav', favouriteA.favourite);

    const favouritesData = shoppingA.Shopping.filter((v) => {
        if (favouriteA.favourite.some((v1) => v1.pid === v.id)) {
            return v;
        }
    })
    // console.log('fdddddddd', favouritesData);

    const ProductCard = ({ v }) => (

        <View style={styles.CategorisView}>
            <View style={styles.Options}><Text style={styles.OptionsText}>{v.title}</Text></View>
        </View>
    )

    const ProductData = ({ v }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <TouchableOpacity style={styles.productMainView} onPress={() => { navigation.navigate("ProductCard") }}>
                <View style={styles.productImg}>
                    <Image source={require('../../assets/image/see_you.img.jpg')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                    <View style={{ position: 'absolute', right: 6, top: 5 }}>
                        <TouchableOpacity><Fontisto name="close" size={22} style={{ color: '#333333' }} /></TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Fontisto name="shopping-bag" size={18} color="#F9F9F9" style={styles.shoppingcard} />
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
                    <Text style={styles.price}>{v.Price}$</Text>
                </View>

            </TouchableOpacity>
        </View>
    )

    return (
        <ScrollView style={styles.container}>

            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />

            <View style={{ backgroundColor: 'white', marginBottom: 25 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <TouchableOpacity><ProductCard v={item} /></TouchableOpacity>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

                <View style={styles.FilterOptions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}><MaterialIcons name="filter-list" size={30} color="black" /><Text style={styles.filterText}>Filters</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }}><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filterText}>Price:lowest to high</Text></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name="th-list" size={26} color="black" /></TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={favouritesData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <TouchableOpacity><ProductData v={item} /></TouchableOpacity>}
                keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(15),
        backgroundColor: '#F9F9F9'
    },
    KeyboardArrow: {
        marginTop: verticalScale(16),
        marginLeft: horizontalScale(-15)
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
        marginTop: verticalScale(4),
        marginLeft: horizontalScale(10)
    },
    productMainView: {
        width: verticalScale(170),
        height: horizontalScale(350),
        marginBottom: verticalScale(40),
        position: 'relative',
    },
    productImg: {
        width: '100%',
        height: '68%',
        position: 'relative'
    },

    productText: {
        width: '100%',
        height: '32%',
        backgroundColor: 'white',
        elevation: 2,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    iconview: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(4),
        marginTop: verticalScale(5),

    },
    mangoText: {
        color: '#866528',
        fontSize: moderateScale(15),
        paddingHorizontal: horizontalScale(6),
        marginTop: verticalScale(6),
        fontFamily: 'Metropolis-SemiBold'
    },
    tShirt: {
        color: '#333',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(6),
        marginTop: verticalScale(3)
    },
    price: {
        color: 'black',
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Medium',
        paddingHorizontal: horizontalScale(7),
        marginTop: verticalScale(4)
    },

    shoppingcard: {
        backgroundColor: '#DA2F23',
        position: 'absolute',
        padding: horizontalScale(15),
        padding: verticalScale(15),
        borderRadius: moderateScale(50),
        bottom: verticalScale(-15),
        right: horizontalScale(0),
        zIndex: 999
    },
})