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
import Animation4 from './app/container/Animation/Animation4'
import Animation5 from './app/container/Animation/Animation5'
import AnimationVideoPlay from './app/container/Animation/AnimationVideoPlay'
import Animation6 from './app/container/Animation/Animation6'
import { PersistGate } from 'redux-persist/integration/react'
import Animation7 from './app/container/Animation/Animation7'
import Animation8 from './app/container/Animation/Animation8'
import Animation9 from './app/container/Animation/Animation9'
import Animation10 from './app/container/Animation/Animation10'
import Animation11 from './app/container/Animation/Animation11'
import Animation12 from './app/container/Animation/Animation12'
import Animation13 from './app/container/Animation/Animation13'
import Animation14 from './app/container/Animation/Animation14'
import Animation15 from './app/container/Animation/Animation15'
import Animation16 from './app/container/Animation/Animation16'
import Animation17 from './app/container/Animation/Animation17'
import Animation18 from './app/container/Animation/Animation18'
import Animation19 from './app/container/Animation/Animation19'
import Animation20 from './app/container/Animation/Animation20'
import Animation21 from './app/container/Animation/Animation21'
import Keyboard from './app/container/Animation/Device/useAnimatedKeyboard/Keyboard'
import Accordian from './app/container/Animation/Accordian/Accordian'
import BottomSheett from './app/container/Animation/Bottomsheet/Bottomsheett'
import Bottomsheett from './app/container/Animation/Bottomsheet/Bottomsheett'
import Flip_Card from './app/container/Animation/Flip Card/Flip_Card'
import FloatingActionButton from './app/container/Animation/Floating Action Button/FloatingActionButton'
import Marquee from './app/container/Animation/Marquee/Marquee'
import Section_list from './app/container/Animation/Section List/Section_list'
import Switch from './app/container/Animation/Switch/Switch'
import Keyframe from './app/container/Animation/Layout animation/Keyframe animations/Keyframe'
import LayoutTransitions from './app/container/Animation/Layout animation/Layout transitions/LayoutTransitions'
import Runon from './app/container/Animation/Threading/runOnJS/Runon'
import Runonui from './app/container/Animation/Threading/runOnUI/Runonui'
import Measure from './app/container/Animation/Advanced APIs/measure/Measure'
import UseanimatedReaction from './app/container/Animation/Advanced APIs/useAnimatedReaction/UseanimatedReaction'
import Useframecallback from './app/container/Animation/Advanced APIs/useFrameCallback/Useframecallback'
import Useevent from './app/container/Animation/Advanced APIs/useEvent/Useevent'
import Setnativeprops from './app/container/Animation/Advanced APIs/setNativeProps/Setnativeprops'
import Makemutable from './app/container/Animation/Advanced APIs/makeMutable/Makemutable'
import Orderstatus from './app/container/Animation/Order status/Orderstatus'
// import My_Profilee from './app/container/My_Profile/My_Profile'
// import My_Profile from './app/container/My_Profile/My_Profile'

export default function App() {

  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottamTab />
        </NavigationContainer>
        {/* <Forget/> */}
        {/* <BottomSheet/> */}
        {/* <Animation/> */}
        {/* <Animation1/> */}
        {/* <Animation2/> */}
        {/* <Animation4/> */}
        {/* <Animation5/> */}
        {/* <Animation6/> */}
        {/* <Animation7/> */}
        {/* <Orderstatus/> */}
        {/* <Animation8/> */}
        {/* <Makemutable/> */}
        {/* <Animation9/> */}
        {/* <Animation10/> */}
        {/* <Setnativeprops/> */}
        {/* <Animation11/> */}
        {/* <Animation12/> */}
        {/* <Useevent/> */}
        {/* <Animation13/> */}
        {/* <Animation14/> */}
        {/* <Useframecallback/> */}
        {/* <Animation15/> */}
        {/* <Animation16/> */}
        {/* <UseanimatedReaction/> */}
        {/* <Animation17/> */}
        {/* <Animation18/> */}
        {/* <Measure/> */}
        {/* <Animation19/> */}
        {/* <Animation20/> */}
        {/* <Runonui/> */}
        {/* <Animation21 /> */}
        {/* <Keyboard/> */}
        {/* <Accordian /> */}
        {/* <Bottomsheett/> */}
        {/* <Flip_Card/> */}
        {/* <FloatingActionButton/> */}
        {/* <Marquee/> */}
        {/* <Section_list/> */}
        {/* <Switch/> */}
        {/* <Runon/> */}
        {/* <Keyframe/> */}
        {/* <LayoutTransitions/> */}
        {/* <BottomSheet/> */}
        {/* <AnimationVideoPlay/> */}
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
      </PersistGate>
    </Provider>

  )
}