
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import Maainpage from '../container/Mainpage/Maainpage';
import My_Bag from '../container/My_Bag/My_Bag';
import ProductCard from '../container/ProductCard/ProductCard';
import AddShipingAddress from '../container/AddShippingAdress/AddShipingAddress';
import My_Orders from '../container/My_Orders/My_Orders';
import Shopping from '../container/Shopping/Shopping';
import My_Profile from '../container/My_Profile/My_Profile';
import ShippingAddresses from '../container/ShippingAddress/ShippingAddress';
import Success from '../container/Success/Success';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Rating from '../container/Rating/Rating';
import Filter from '../container/Filter/Filter';
import CategoriesTwo from '../container/CategoriesTwo/CategoriesTwo';

const Stack = createNativeStackNavigator();

function HeaderBarLeft({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            title="Cancel"
            color="#fff">
            <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
        </TouchableOpacity>
    )
}


// function HomeBar() {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             width: '95%',
//             justifyContent: 'space-between',
//             marginTop: 50
//         }}>
//             <TouchableOpacity
//             >
//                 <Text><MaterialIcons name='keyboard-arrow-left' size={25} color='black' /></Text>
//             </TouchableOpacity>
//             <Text style={{ color: 'black', fontFamily: 'Metropolis-regular', fontSize: 16 }}>Home</Text>
//             <TouchableOpacity>
//                 <Text><Fontisto name='search' size={20} color='black' /></Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function ShopBar() {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             width: '95%',
//             justifyContent: 'space-between'
//         }}>
//             <TouchableOpacity
//             >
//                 <Text><MaterialIcons name='keyboard-arrow-left' size={25} color='black' /></Text>
//             </TouchableOpacity>
//             <Text style={{ color: 'black', fontFamily: 'Metropolis-regular', fontSize: 16 }}>Women's Tops</Text>
//             <TouchableOpacity>
//                 <Text><Fontisto name='search' size={20} color='black' /></Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// function ProductBar({ navigation }) {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             width: '90%',
//             justifyContent: 'space-between',
//             marginTop: 50
//         }}>
//             <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//             >
//                 <Text><MaterialIcons name='keyboard-arrow-left' size={25} color='black' /></Text>
//             </TouchableOpacity>
//             <Text style={{ color: 'black', fontFamily: 'Metropolis-regular', fontSize: 16 }}>Product</Text>
//             <TouchableOpacity>
//                 <Text><MaterialIcons name="share" size={20} color="black" /></Text>
//             </TouchableOpacity>
//         </View>
//     );


// }

// function FavouriteBar() {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             width: '95%',
//             justifyContent: 'space-between'
//         }}>
//             <TouchableOpacity
//             >
//                 <Text><MaterialIcons name='keyboard-arrow-left' size={25} color='black' /></Text>
//             </TouchableOpacity>
//             <Text style={{ color: 'black', fontFamily: 'Metropolis-regular', fontSize: 16 }}>Favourite</Text>
//             <TouchableOpacity>
//                 <Text><Fontisto name='search' size={20} color='black' /></Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function ProfileBar() {
//     return (
//         <View style={{
//             flexDirection: 'row',
//             width: '95%',
//             justifyContent: 'space-between'
//         }}>
//             <TouchableOpacity
//             >
//                 <TextInput
//                     placeholder='search your profile'
//                     style={{
//                         width: 270,
//                         height: 36,
//                         borderWidth: 0.4,
//                         borderRadius: 5
//                     }}>

//                 </TextInput>

//                 {/* <Text><MaterialIcons name='keyboard-arrow-left' size={25} color='black' /></Text> */}
//             </TouchableOpacity>
//             {/* <Text style={{ color: 'black', fontFamily: 'Metropolis-regular', fontSize: 16 }}></Text> */}
//             <TouchableOpacity>
//                 <Text><Fontisto name='search' size={20} color='black' /></Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

export const HomeStack = () => {
    return (<Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'F8F9FA' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' }
    }}>

        <Stack.Screen
            name="Home"
            component={Maainpage}
            options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //     headerLeft: () =>
        //         <HeaderBarLeft navigation={navigation} />
        // })}
        />
        <Stack.Screen name='Categories Two' component={CategoriesTwo} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
        <Stack.Screen name='ProductCard' component={ProductCard} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
        <Stack.Screen name="MyBag" component={My_Bag} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />,
            headerRight: () =>
                <MaterialIcons name="search" color="black" size={30} />
        })}
        />
        <Stack.Screen name='Addshipping Adress' component={AddShipingAddress} />
        <Stack.Screen name="cart" component={ShippingAddresses} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
        <Stack.Screen name="success" component={Success} options={{
            headerLeft: () => (null)
        }} />
        <Stack.Screen
            name="Home1"
            component={Maainpage}
            options={{ headerShown: false }}
        />

    </Stack.Navigator>)
}

export const ShopStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen name='Shop'
            component={Shopping}
            options={({ navigation }) => ({
                headerLeft: () =>
                    <HeaderBarLeft navigation={navigation} />
            })} />

        <Stack.Screen name='ProductCard' component={ProductCard} />
        <Stack.Screen name='filter' component={Filter} />
    </Stack.Navigator>)
}

export const ProductStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen name='Product'
            component={ProductCard}
            options={({ navigation }) => ({
                headerLeft: () =>
                    <HeaderBarLeft navigation={navigation} />
            })} />

        <Stack.Screen name='MyBag' component={My_Bag} />
        <Stack.Screen name='shoop' component={FavouritePage} />
    </Stack.Navigator>)
}

export const BagStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen name='My bag'
            component={FavouritePage}
            options={({ navigation }) => ({
                headerLeft: () =>
                    <HeaderBarLeft navigation={navigation} />
            })} />

        <Stack.Screen name='ProductCard' component={ProductCard} />

    </Stack.Navigator>)
}

export const AddShiipingStack = () => {
    return (<Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
    }}>
        <Stack.Screen name='My Profile'
            component={My_Profile}
            options={({ navigation }) => ({
                headerLeft: () =>
                    <HeaderBarLeft navigation={navigation} />
            })} />

        <Stack.Screen name='My Orders' component={My_Orders} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
        <Stack.Screen name='Shipping Address' component={ShippingAddresses} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
        <Stack.Screen name='Rating' component={Rating} options={({ navigation }) => ({
            headerLeft: () =>
                <HeaderBarLeft navigation={navigation} />
        })} />
    </Stack.Navigator>)
}




