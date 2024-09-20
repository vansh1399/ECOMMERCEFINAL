
import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    filter: [],
    error: null
}

export const getFilter = createAsyncThunk(
    'filter/fetchgetFilter',
    async () => {
        try {
            const filterData = [];
            await firestore()
                .collection('Colour')
                .get()
                .then(querySnapshot => {
                    console.log('Total users: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        filterData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });
                });

                console.log(filterData);
            return filterData;
        } catch (error) {
            console.log('ddd', error);
        }
    }
)

const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getFilter.fulfilled, (state, action) => {
            state.filter = action.payload
        })

    }
})

export default FilterSlice.reducer