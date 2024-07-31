import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    subCategories: [],
    error: null
}

export const subBythunk = createAsyncThunk(
    'subCategory/fetch',
    async (cat_id) => {
        console.log("fffff", cat_id);
        const sub_data = []
        await firestore()
            .collection('SubCategory')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().category_id === cat_id) {
                        sub_data.push(documentSnapshot.id, documentSnapshot.data())
                    }
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        console.log("mil gya", sub_data);
        return sub_data
    }

)

const subCategorySlice = createSlice({
    name: 'subCategory',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(subBythunk.fulfilled, (state, action) => {
            state.subCategories = action.payload
        })
    }
})

export default subCategorySlice.reducer