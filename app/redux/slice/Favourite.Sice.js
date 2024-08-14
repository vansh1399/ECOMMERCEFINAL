import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    favourite: [],
    error: null
}

export const googleFavourite = createAsyncThunk(
    'favourite/fetch',
    async (id) => {
        console.log('idokkkkkkkk',id);       
    }
)

const FavouriteSice = createSlice({
    name: 'favourite',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(googleFavourite.fulfilled, (state, action) => {
            state.favourite = action.payload
        })
    }
})

export default FavouriteSice.reducer