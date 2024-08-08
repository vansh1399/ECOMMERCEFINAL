import { View, Text, StatusBar, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList, VirtualizedList, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCategories } from '../../redux/slice/category.slice';
import { moderateScale, verticalScale, horizontalScale } from '../../Metrics';



const Data = [
  {
    id: 1,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 15,
    discount: 12
  },
  {
    id: 0,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 15,
    discount: 12
  },
  {
    id: 2,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 15,
    discount: 12
  },
  {
    id: 3,
    title: 'Dorothy perkins',
    subtitle: 'Evening Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 15,
    discount: 12
  }
]
const Data1 = [
  {
    id: 1,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 19,
    discount: 22
  },
  {
    id: 0,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 19,
    discount: 22
  },
  {
    id: 2,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 19,
    discount: 22
  },
  {
    id: 3,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/image/main_page_girl_img.png'),
    price: 19,
    discount: 22
  }
]



export default function Maainpage({ route, navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])


  const category = useSelector(state => state.categories);

  console.log("sjdjdjdjjdjjd", category);
  const ProductCard = ({ v }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { navigation.navigate("ProductCard") }}>

      <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

      <View style={style.iconview}>
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <Text style={{ color: '#9B9B9B' }}>(10)</Text>
      </View>

      <Text style={style.title}>{v.title}</Text>
      <Text style={style.subtitle}>{v.subtitle}</Text>
      <View style={style.PriceView}>
        <Text style={style.discount}>{v.discount}$</Text>
        <Text style={style.price}>{v.price}$</Text>

      </View>

    </TouchableOpacity>

  )
  return (
    <ScrollView style={style.container}>
      <StatusBar
        animated={true}
        translucent backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={style.mainview}>
        <ImageBackground
          source={require('../../assets/image/fashion_image_1.jpeg')}
          style={{
            width: "100%",
            height: "100%"
          }}
        >

        </ImageBackground>
        <View style={{ width: horizontalScale(200) }}>
          <Text style={style.Fashionsale}>Fashion Sale</Text>

          <TouchableOpacity style={style.checkbutton}>
            <Text style={style.CheckText}>Check</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>Sale </Text>
            <Text style={style.SummerText}>Super summer sale </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>New </Text>
            <Text style={style.SummerText}>You've never seen it before! </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data1}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      {category.categories.map((v, i) => {
        return (
          <View key={i}>



            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Categories Two", { cat_id: v.id })}>
              <Image style={style.img} source={require('../../assets/image/fashion_girl1.jpg')} />
              <Text style={style.BlackTextt}>Women</Text>
            </TouchableOpacity>
            </View>
           
            {/* <View style={style.textsale}>
            <Text style={style.newcoll}>{v.name}</Text>
            </View> */}
{/* 
            <View style={style.BlackVieww}>
                  <Image source={require('../../assets/image/fashion_girl2.jpg')} style={{ width: '100%', height:'50%' }} />
                  <Text style={style.BlackTextt}>Black</Text>
                </View> */}

            <View style={style.DirectView}>
              <View style={style.SecondView}>
                <View style={style.SummSale}>
                  <View style={style.SumTextView}>
                    <Text style={style.SummText1}>{v.name}</Text>
                  </View>
                </View>
                <View style={style.BlackView}>
                  <Image source={require('../../assets/image/fashion_girl2.jpg')} style={{ width: '100%', height: '100%' }} />
                  <Text style={style.BlackText}>Black</Text>
                </View>
              </View>
              <View style={style.BodieView}>
                <Image source={require('../../assets/image/fashion_girl_img9.png')} style={{ width: '100%', height: '100%' }} />
                <View style={style.hoodieTextView}>
                  <Text style={style.hoodieText}>{v.name}</Text>
                </View>
              </View>
            </View>
          </View>

          // </View>
        )

      })}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  mainview: {
    width: '100%',
    height: verticalScale(570),
    position: 'relative'
  },
  Fashionsale: {
    color: 'white',
    fontSize: moderateScale(54),
    position: 'absolute',
    bottom: moderateScale(130),
    left: moderateScale(12),
    fontFamily: 'Metropolis-Black'
  },

  checkbutton: {
    width: verticalScale(150),
    backgroundColor: '#DB3022',
    height: verticalScale(40),
    alignItems: 'center',
    padding: 8,
    borderRadius: moderateScale(50),
    position: 'absolute',
    bottom: moderateScale(80),
    left: moderateScale(12),

  },
  CheckText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Metropolis-Medium'
  },
  SaleView: {
    flex: 1,
    marginTop: verticalScale(18),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(12),
    justifyContent: 'space-between',
    marginBottom: verticalScale(30)
  },
  SaleText: {
    color: '#222222',
    fontSize: moderateScale(32),
    fontFamily: 'Metropolis-Bold'
  },
  SummerText: {
    color: '#9B9B9B',
    fontSize: moderateScale(11),
    fontFamily: 'Metropolis-Regular'
  },
  ViewAll: {
    paddingRight: horizontalScale(10),
    marginTop: verticalScale(19),
    fontSize: moderateScale(13),
    fontFamily: 'Metropolis-Regular',
    color: 'black'
  },
  title: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(13),
    fontFamily: 'Metropolis-Regular'
  },
  subtitle: {
    color: 'black',
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(19),
    fontFamily: 'Metropolis-SemiBold'
  },
  iconview: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(2),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(6)
  },
  PriceView: {
    flexDirection: 'row'
  },
  discount: {
    color: '#9B9B9B',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingHorizontal: horizontalScale(3),
    textDecorationLine: 'line-through',
    fontFamily: 'Metropolis-Medium'
  },
  price: {
    color: '#DB3022',
    fontSize: moderateScale(19),
    marginTop: verticalScale(2),
    paddingLeft: horizontalScale(6),
    fontFamily: 'Metropolis-Medium'
  },
  FisrtNew: {
    marginTop: verticalScale(60),
    width: '100%',
    height: verticalScale(390)
  },
  FistViewText: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(38),
    position: 'absolute',
    bottom: verticalScale(18),
    right: horizontalScale(22)
  },

  SummSale: {
    backgroundColor: 'white',
    width: '50%',
    height: '50%',
  },
  SumTextView: {
    width: horizontalScale(150),
    height: verticalScale(100),

  },
  SummText1: {
    color: '#DB3022',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  },
  BlackView: {
    position: 'relative',
    width: '100%',
    height: '50%',
  },
  BlackVieww: {
    position: 'relative',
    width: '100%',
    height: '50%',
  },
  BlackText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(18)
  },
  BlackTextt: {
    color: '#FFFFFF',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(200)
  },
  SecondView: {
    width: '50%',
    height: verticalScale(400)
  },
  DirectView: {
    width: '100%',
    height: verticalScale(400),
    flexDirection: 'row'
  },
  BodieView: {

    width: '50%',
    height: '100%',
    position: 'relative'
  },
  hoodieTextView: {

  },

  hoodieText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  },
  DirectView: {
    width: '100%',
    height: verticalScale(400),
    flexDirection: 'row'
  },

  SecondView: {
    width: '50%',
    height: verticalScale(400)
  },
  SummSale: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  SumTextView: {
    width: horizontalScale(150),
    height: verticalScale(100),
    position: 'absolute',
    bottom: horizontalScale(30),
    left: horizontalScale(18)
  },
  SummText1: {
    color: '#DB3022',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  },
  BlackView: {
    backgroundColor: 'red',
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  BlackText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: horizontalScale(20),
    left: horizontalScale(20)
  },
  BodieView: {
    backgroundColor: 'red',
    borderWidth: 1,
    width: '50%',
    height: '100%',
    position: 'relative',
    // paddingRight:210,
    // display:'flex'

  },
  hoodieTextView: {
    // position: 'absolute',
    bottom: horizontalScale(90),
    left: horizontalScale(40),

  },
  hoodieText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  },
  img: {
    width: '100%',
    height: verticalScale(390),
  },
  newcoll: {
    // position: 'absolute',
    color: 'black',
    fontSize: moderateScale(40),
    fontFamily: 'Metropolis-Bold',
    marginLeft: horizontalScale(70),
    // top: horizontalScale(20)
  },

})