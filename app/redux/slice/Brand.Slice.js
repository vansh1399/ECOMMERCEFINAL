import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    filterbrand: [],
    error: null
}

export const getFilterBrand = createAsyncThunk(
    'brand/fetch',
    async () => {
        // console.log("fffff", data);
        const brand_data = []
        console.log('ff',brand_data);
        
        await firestore()
            .collection('Brand')
            .get()
            .then(querySnapshot => {
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    brand_data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('hhhhh', brand_data.push(documentSnapshot.data()));
                    // console.log("lllllllll", brand_data);
                });

            });

        return brand_data
    }
)

const BrandSlice = createSlice({
    name: 'brand',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getFilterBrand.fulfilled, (state, action) => {
            state.filterbrand = action.payload
        })
    }
})

export default BrandSlice.reducer