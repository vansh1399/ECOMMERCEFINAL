import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';
import { date } from "yup";

const initialState = {
    isLoading: false,
    shippingAddress: [],
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
            const addshipData = [];
            await firestore()
                .collection('address')
                .doc(data.uid)
                .get()
                .then(documentSnapshot => {

                    if (documentSnapshot.exists) {
                        addshipData.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    console.log('getcartttttt', addshipData);

                });
            return addshipData
        } catch (error) {
            console.log("error", error);

        }

    }
)

export const addshippingByget = createAsyncThunk(
    'shippingAddress/getCart',
    async (id) => {
        console.log('iddddddddd', id);

        const addshipData = [];

        try {
            await firestore()
                .collection('address')
                .doc(id)
                .get()
                .then(documentSnapshot => {

                    if (documentSnapshot.exists) {
                        addshipData.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    console.log('getcartttttt', addshipData);


                });
            return addshipData
        } catch (error) {
            console.log("rrrrreeeeeeeeeeeee", error);

        }


    }
)

export const deleteShipping=createAsyncThunk(
    'shippingAddress/deleteShipping',
    async(data)=>{
        console.log('data3',data);
        try {
            const userDocRef = await firestore().collection('address').doc(data.uid);
            console.log('userrdddddocccc',userDocRef);
            
            await userDocRef.update(
                {
                    address: firebase.firestore.FieldValue.arrayRemove(
                        data
                    )
                }
            )
            const addshipData = [];
            await firestore()
                .collection('address')
                .doc(data.uid)
                .get()
                .then(documentSnapshot => {

                    if (documentSnapshot.exists) {
                        addshipData.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                    console.log('getcartttttt', addshipData);

                });
            return addshipData
        } catch (error) {
            
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
        builder.addCase(deleteShipping.fulfilled, (state, action) => {
            state.shippingAddress = action.payload
        })
    }

})

export default ShippingAddressSlice.reducer