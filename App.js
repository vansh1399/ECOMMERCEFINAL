import { View, Text } from 'react-native'
import React from 'react'

import { Provider } from 'react-redux'
import Login from './app/container/Login/Login'
import { configureStore } from './app/redux/slice/store'
import AddShipingAddress from './app/container/AddShippingAdress/AddShipingAddress'
import Signup from './app/container/Signup/Signup'
import Maainpage from './app/container/Mainpage/Maainpage'
import CategoriesTwo from './app/container/CategoriesTwo/CategoriesTwo'
import ProductCard from './app/container/ProductCard/ProductCard'
import SubCategories2 from './app/container/Shopping/Shopping'
import FavouritePage from './app/container/FavouritePage/FavoritesPage'
import Filter from './app/container/Filter/Filter'
import Rating from './app/container/Rating/Rating'
import My_Bag from './app/container/My_Bag/My_Bag'

import Success from './app/container/Success/Success'
import { NavigationContainer } from '@react-navigation/native';
import BottamTab from './app/Navigation/BottamTab'
import Forget from './app/container/Forget/Forget'
import My_Orderss from './app/container/My_Orders/My_Orders'
import My_Profilee from './app/container/My_Profile/My_Profile'
import My_Profile from './app/container/My_Profile/My_Profile'
import My_Orders from './app/container/My_Orders/My_Orders'
import Shopping from './app/container/Shopping/Shopping'
import ShippingAddresses from './app/container/ShippingAddress/ShippingAddress'
import BottomSheet from './app/container/BottomSheet/BottomSheet'
import Shop from './app/container/Shop/Shop'
import Animation from './app/container/Animation/Animation'
import Animation1 from './app/container/Animation/Animation1'
import Animation2 from './app/container/Animation/Animation2'
// import My_Profilee from './app/container/My_Profile/My_Profile'
// import My_Profile from './app/container/My_Profile/My_Profile'

export default function App() {

  const store = configureStore()
  return (

    <Provider store={store}>
      <NavigationContainer>
        {/* <BottamTab /> */}
      </NavigationContainer>
      {/* <Forget/> */}
      {/* <BottomSheet/> */}
      {/* <Animation/> */}
      {/* <Animation1/> */}
      <Animation2/>
      {/* <Signup/> */}
      {/* <AddShipingAddress/> */}
      {/* <Maainpage/> */}
      {/* <CategoriesTwo/> */}
      {/* <ProductCard/> */}
      {/* <Shopping/> */}
      {/* <FavouritePage/> */}
      {/* <Filter/> */}
      {/* <Rating/> */}
      {/* <My_Orders/> */}
      {/* <ShippingAddresses/> */}
      {/* <My_Bag/> */}
      {/* <Success/> */}
      {/* <Drawer /> */}
      {/* <My_Profile/> */}
      {/* <Shop/> */}
    </Provider>

  )
}