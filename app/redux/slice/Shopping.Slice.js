import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Shopping: [],
    error: null
}

export const shopByThunk = createAsyncThunk(
    'shopping/fetch',
    async (data) => {
        // console.log("fffff", data);
        const shop_data = []
        await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
            if ((documentSnapshot.data().category_id === data.cat_id)&& (documentSnapshot.data().subCategory_id === data.sub_id)) {
                        shop_data.push(documentSnapshot.data())
                    }
                    console.log('hhhhh',     shop_data.push(documentSnapshot.data()));
                    // console.log('User IDD: ', documentSnapshot.id, documentSnapshot.data());
                    
                    console.log("lllllllll", shop_data);
                });
                
            });
        
        return shop_data
    }
)

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(shopByThunk.fulfilled,(state,action)=>{
            state.Shopping=action.payload
        })
    }
})

export default shoppingSlice.reducer