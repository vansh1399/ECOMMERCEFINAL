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
        // console.log('dataaaaa', data);
        try {
            const cardData = [];
            const useDoc = await firestore().collection('Cart').doc(data.uid);
            await useDoc.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        cardData.push(documentSnapshot.data())
                    }
                });

            if (cardData.length > 0) {
                const index = cardData[0].cart.findIndex((v) => v.pid === data.id)

                try {
                    if (index !== -1) {
                        try {
                            await useDoc.update(
                                {
                                    cart: firebase.firestore.FieldValue.arrayRemove({
                                        pid: data.id,
                                        qty: cardData[0].cart[index].qty
                                    })
                                }
                            );
                            await useDoc.update(
                                {

                                    cart: firebase.firestore.FieldValue.arrayUnion({
                                        pid: data.id,
                                        qty: cardData[0].cart[index].qty + 1
                                    })
                                }
                            )
                        } catch (error) {

                        }
                    } else {
                        await useDoc.update(
                            {
                                cart: firebase.firestore.FieldValue.arrayUnion({
                                    pid: data.id,
                                    qty: 1
                                })
                            }
                        )
                    }
                } catch (error) {

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
        } catch (error) {

        }
    }
)

export const getCart = createAsyncThunk(
    'cart/getCart',
    async () => {
        const getCartData = [];
        await firestore()
            .collection('Cart')
            .get()
            .then(querySnapshot => {
                
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    getCartData.push({id:documentSnapshot.id,...documentSnapshot.data()})
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
            return getCartData
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

    },
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
    }
})

export const { addtocart, incrementQty, decrementQty } = cartSlice.actions
export default cartSlice.reducer