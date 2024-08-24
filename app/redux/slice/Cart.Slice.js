import firestore, { firebase } from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (data) => {
        console.log('dataaaaa', data);

        const useDoc = await firestore().collection('Cart').doc(data.uid);
        const userData = await useDoc.get();
        console.log('userdataaaaaaaaaa', userData.exists);

        if (userData.exists) {
            try {
                await useDoc.update(
                    {
                        cart: firebase.firestore.FieldValue.arrayUnion({
                            pid: data.id,
                            qty: 1
                        })
                    }
                )
            } catch (error) {
                console.log("eeeeeeeeeeeeee", error);
            }
        } else {
            await firestore()
                .collection('Cart')
                .doc(data.uid)
                .set({
                    cart: [{
                        pid: data.id,
                        qty: 1
                    }]
                })
        }

    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // addtocart: (state, action) => {

        //     const index = state.cart.findIndex((v) => v.pid === action.payload)
        //     console.log('indexxxxxxxx', index);

        //     if (index === -1) {
        //         state.cart.push({ pid: action.payload, qty: 1 })
        //     } else {

        //         state.cart[index].qty++
        //     }

        // },
        // incrementQty: (state, action) => {
        //     const index = state.cart.findIndex((v) => v.pid === action.payload)
        //     console.log('jjjjjj', index);

        //     state.cart[index].qty++

        // },
        // decrementQty: (state, action) => {
        //     const index = state.cart.findIndex((v) => v.pid === action.payload)
        //     console.log('jjjkkkkkkkkjjj', index);
        //     if (state.cart[index].qty > 1) {
        //         state.cart[index].qty--
        //     }
        // }

    }
})

export const { addtocart, incrementQty, decrementQty } = cartSlice.actions
export default cartSlice.reducer