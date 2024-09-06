import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth, { sendEmailVerification } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    auth: null,
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

                    await firestore()
                        .collection('Users')
                        .doc(user.uid)
                        .set({
                            name: data.name,
                            email: data.email,
                            emaiVerification: false
                        })
                        .then(() => {
                            console.log('User added!');
                        });
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
            let userData = {}
            await auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {

                    if (user.emailVerified) {
                        console.log('dddddd');
                        await firestore()
                            .collection('Users')
                            .doc(user.uid)
                            .update({
                                emaiVerification: true
                            })
                            .then(async () => {
                                console.log('User updated!');
                                const user1 = await firestore().collection('Users').doc(user.uid).get();
                                userData = user1.data();
                            });
                    } else {
                        console.log('eeeee');
                    }
                    
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

                return userData;

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