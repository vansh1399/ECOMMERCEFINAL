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
        console.log('databkkkkkk',data);

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




const ShippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(shippingAddByget.fulfilled, (state, action) => {
            state.shippingAddress = action.payload
        })
    }

})

export default ShippingAddressSlice.reducer