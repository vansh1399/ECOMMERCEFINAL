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
        const favData = []
        console.log('idokkkkkkkk', id);
        await firestore()
            .collection('fav')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    favData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data();
                });
            });

        const avlfav = favData.find((v) => v.pid === id)

        if (avlfav) {
            firestore()
                .collection('fav')
                .doc(avlfav.id)
                .delete()
            // .then(() => {
            //   console.log('User deleted!');
            // });
            const fData = favData.filter((v) => v.pid !== id);
            return fData;
        } else {
            let favId = ''
            await firestore()
                .collection('fav')
                .add({
                    pid: id,
                    uid: 1,
                })
                .then((doc) => {
                    favId = doc.id
                    console.log('User added!');
                });

            return favData.concat({
                pid: id,
                uid: 1, id: favId
            })
        }
    }
)

export const getfav = createAsyncThunk(
    'favourites/fetch',
    async () => {
        const favouriteData = []
        await firestore()
            .collection('fav')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    favouriteData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data();
                });
            });
        return favouriteData;
    }
)

const FavouriteSice = createSlice({
    name: 'favourites',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(googleFavourite.fulfilled, (state, action) => {
            state.favourite = action.payload
        })
        builder.addCase(getfav.fulfilled, (state, action) => {
            state.favourite = action.payload
        })
    }
})

export default FavouriteSice.reducer
