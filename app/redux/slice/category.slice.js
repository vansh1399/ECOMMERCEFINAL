
import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    categories: [],
    error: null
}

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => {
        try {
            const categoryData = [];
            await firestore()
                .collection('Category')
                .get()
                .then(querySnapshot => {
                    console.log('Total users: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        categoryData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });
                });

                console.log(categoryData);
            return categoryData;
        } catch (error) {
            console.log('ddd', error);
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })

    }
})

export default categorySlice.reducer