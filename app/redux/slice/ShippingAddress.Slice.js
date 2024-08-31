import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';
import { date } from "yup";

const initialState = {
    isLoading: false,
    shippingAddress: '',
    error: null
}

export const shippingAddByget = createAsyncThunk(
    'shippingAddress/shippingAddByget',
    async (data) => {
        console.log('databkkkkkk', data);

        try {
            const shipingData = [];

            const userDocRef = await firestore().collection('address').doc(data.uid);
            const userDoc = await userDocRef.get();
            console.log("userDoc", userDoc.exists);

            if (userDoc.exists) {
                await userDocRef.update(
                    {
                        address: firebase.firestore.FieldValue.arrayUnion(
                            data
                        )
                    }
                )
            } else {
                await userDocRef.set({
                    address: [data]
                })
            }
            return shipingData
        } catch (error) {
            console.log("error", error);

        }

    }
)

export const addshippingByget = createAsyncThunk(
    'cart/getCart',
    async (id) => {
        console.log('iddddddddd', id);

        const addshipData = [];

        try {
            await firestore()
                .collection('address')
                .doc(id)
                .get()
                .then(documentSnapshot => {

                    // console.log("dddddd5252", documentSnapshot.data());

                    if (documentSnapshot.exists) {
                        addshipData.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    console.log('getcartttttt', addshipData);

                    // console.log('Total users: ', querySnapshot.size);

                    // querySnapshot.forEach(documentSnapshot => {
                    //     addshipData.push({id:documentSnapshot.id,...documentSnapshot.data()})
                    //     // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    // });
                });
                return addshipData
        } catch (error) {
            console.log("rrrrreeeeeeeeeeeee", error);

        }

       
    }
)




const ShippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(shippingAddByget.fulfilled, (state, action) => {
            state.shippingAddress = action.payload
        })
        builder.addCase(addshippingByget.fulfilled, (state, action) => {
            state.shippingAddress = action.payload
        })
    }

})

export default ShippingAddressSlice.reducer