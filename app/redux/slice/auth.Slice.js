import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import auth, { sendEmailVerification } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const initialState = {
    isLoading: false,
    auth: null,
    error: null,
    confirmation: null
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

export const authsignOut = createAsyncThunk(
    'auth/authsignOut',
    async () => {
        try {
            await auth()
                .signOut()
                .then(() => console.log('User signed out!'));
            await AsyncStorage.clear();
            return null;
        } catch (error) {
            console.log('error111', error);
        }
    }
)

export const GoogleSignup = createAsyncThunk(
    'auth/GoogleSignup',
    async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // console.log('GoogleSignin', GoogleSignin);

            // Get the users ID token
            const userinfo = await GoogleSignin.signIn();
            // console.log('userinfo', userinfo);

            const { idToken } = await GoogleSignin.getTokens();
            // console.log('idToken', idToken);

            // Create a Google credential with the token
            const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
            // console.log('googleCredential', googleCredential);

            // Sign-in the user with the credential
            const x = auth().signInWithCredential(googleCredential);
            // console.log('x', x);

            return x;
        } catch (error) {
            console.log('error', error);
        }
    }
)

export const FacebookSignup = createAsyncThunk(
    'auth/FacebookSignup',
    async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            // console.log('result', result);


            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
            // console.log('result.isCancelled', result.isCancelled);


            // Once signed in, get the users AccessToken
            const data = await AccessToken.getCurrentAccessToken();
            // console.log('datafacebook', data);


            if (!data) {
                throw 'Something went wrong obtaining access token';
            } else {
                // console.log('=>success', data);

            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            // console.log('facebookCredential', facebookCredential);

            // Sign-in the user with the credential
            const y = await auth().signInWithCredential(facebookCredential);
            // console.log('y', y);
            return y;

        } catch (error) {
            console.log('error', error);
        }
    }
)

export const phoneAuth = createAsyncThunk(
    'auth/phoneAuth',
    async (data) => {
        // console.log('data and phone', data.phone);
        try {
            const confirmation = await auth().signInWithPhoneNumber(data.phone);
            // console.log('confirmation', confirmation);

            return confirmation
        } catch (error) {
            console.log('error is phone number: ', error);
        }
    }
)

export const OtpNo = createAsyncThunk(
    'auth/OtpNo',
    async (data) => {
      
        try {
            console.log('data and code1', data.code);
            const dataR = await data.confirm.confirm(data.code);
            console.log(dataR);

            return dataR;
        } catch (error) {
            // console.log('Invalid code.');
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(authSignupEmail.fulfilled, (state, action) => {
            // console.log('actionpayload', action.payload)
            state.auth = action.payload
        }),
            builder.addCase(authloginupEmail.fulfilled, (state, action) => {
                // console.log('authloginupmail', action.payload)
                state.auth = action.payload
            }),
            builder.addCase(authsignOut.fulfilled, (state, action) => {
                // console.log('authsignout', action.payload)
                state.auth = action.payload
            })
        builder.addCase(GoogleSignup.fulfilled, (state, action) => {
            // console.log('GoogleSignup', action.payload);
            state.auth = action.payload
        })
        builder.addCase(FacebookSignup.fulfilled, (state, action) => {
            // console.log('FacebookSignup', FacebookSignup);
            state.auth = action.payload
        })
        builder.addCase(phoneAuth.fulfilled, (state, action) => {
            // console.log('phoneAuth', phoneAuth);
            state.confirmation = action.payload
        })
        builder.addCase(OtpNo.fulfilled, (state, action) => {
            // console.log('OtpNo', OtpNo);
            state.auth = action.payload
        })
    }
})

export default authSlice.reducer