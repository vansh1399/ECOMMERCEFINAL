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
    async (id) => {
        console.log('iddddddddd', id);

        const getCartData = [];

        try {
            await firestore()
                .collection('Cart')
                .doc(id)
                .get()
                .then(documentSnapshot => {

                    // console.log("dddddd5252", documentSnapshot.data());

                    if (documentSnapshot.exists) {
                        getCartData.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    // console.log('getcartttttt', getCartData);

                    // console.log('Total users: ', querySnapshot.size);

                    // querySnapshot.forEach(documentSnapshot => {
                    //     getCartData.push({id:documentSnapshot.id,...documentSnapshot.data()})
                    //     // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    // });
                });
                return getCartData
        } catch (error) {
            console.log("rrrrreeeeeeeeeeeee", error);

        }

       
    }
)

export const incrementbyCart = createAsyncThunk(
    'cart/incrementbyCart',
    async (data, { getState }) => {
        console.log('datatatatata', data);

        const { carts } = getState();
        console.log('ddddddd', carts);

        const useDoc = await firestore().collection('Cart').doc(data.uid);
        const index = carts?.cart[0]?.cart.findIndex((v) => v.pid === data.id)

        console.log('indexxxxxfffffxx', index);
        console.log('userdoccccccc', useDoc);

        try {
            await useDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayRemove({
                        pid: data.id,
                        qty: carts?.cart[0]?.cart[index].qty
                    })
                }
            );
            await useDoc.update(
                {

                    cart: firebase.firestore.FieldValue.arrayUnion({
                        pid: data.id,
                        qty: carts?.cart[0]?.cart[index].qty +1
                    })
                }
            )

            const BagData = [];

            await useDoc.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        BagData.push(documentSnapshot.data())
                    }
                });
            return BagData
        } catch (error) {

        }

    }
)

export const decrementbyCart = createAsyncThunk(
    'cart/decrementbyCart',
    async (data, { getState }) => {
        const { carts } = getState();
        const useDoc = await firestore().collection('Cart').doc(data.uid);
        const index = carts?.cart[0]?.cart.findIndex((v) => v.pid === data.id)

        try {
            await useDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayRemove({
                        pid: data.id,
                        qty: carts?.cart[0]?.cart[index].qty
                    })
                }
            );
            await useDoc.update(
                {

                    cart: firebase.firestore.FieldValue.arrayUnion({
                        pid: data.id,
                        qty: carts?.cart[0]?.cart[index].qty - 1
                    })
                }
            )

            const BagData = [];

            await useDoc.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        BagData.push(documentSnapshot.data())
                    }
                });
            return BagData;
        } catch (error) {
            console.log("bagdatatatat", error);

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

    },
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        builder.addCase(incrementbyCart.fulfilled, (state, action) => {
            // console.log('actionnnnnnnnnn', action.payload);
            state.cart = action.payload
        })
        builder.addCase(decrementbyCart.fulfilled, (state, action) => {
            console.log('actionnnnnnnnnn', action.payload);
            state.cart = action.payload
        })
    }
})

export const { addtocart, incrementQty, decrementQty } = cartSlice.actions
export default cartSlice.reducer