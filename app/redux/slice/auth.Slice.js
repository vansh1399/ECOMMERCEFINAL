import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth, { sendEmailVerification } from '@react-native-firebase/auth';

const initialState = {
    isLoading: false,
    auth: [],
    error: null,
}

export const authSignupEmail = createAsyncThunk(
    'auth/authSignupEmail',
    async (data) => {
        console.log('data5', data);

        try {
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    await user.sendEmailVerification()
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } catch (error) {
            console.log("eeeeeeeeeeeeee", error);

        }
    }
)


export const authloginupEmail = createAsyncThunk(
    'auth/authloginupEmail',
    async (data) => {
        console.log('data5', data);

        try {
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    await user.sendEmailVerification()


                    // if (user.user ? ) {

                    // }
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } catch (error) {
            console.log("eeeeeeeeeeeeee", error);

        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(authSignupEmail.fulfilled, (state, action) => {
            console.log('actionpayload', action.payload)
            state.auth = action.payload
        }),
            builder.addCase(authloginupEmail.fulfilled, (state, action) => {
                console.log('actionpayload', action.payload)
                state.auth = action.payload
            })
    }
})

export default authSlice.reducer