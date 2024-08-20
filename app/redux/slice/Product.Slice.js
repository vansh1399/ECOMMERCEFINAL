import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Shopping: [],
    error: null
}

export const getProduct = createAsyncThunk(
    'product/fetch',
    async () => {
        // console.log("fffff", data);
        const shop_data = []
        await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    shop_data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('hhhhh',shop_data.push(documentSnapshot.data()));

                    // console.log("lllllllll", shop_data);
                });

            });

        return shop_data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.Shopping = action.payload
        })
    }
})

export default productSlice.reducer