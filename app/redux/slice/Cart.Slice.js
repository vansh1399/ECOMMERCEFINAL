import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtocart: (state, action) => {

            const index = state.cart.findIndex((v) => v.pid === action.payload)
            console.log('indexxxxxxxx', index);

            if (index === -1) {
                state.cart.push({ pid: action.payload, qty: 1 })
            } else {

                state.cart[index].qty++
            }

        },
        incrementQty: (state, action) => {
            const index = state.cart.findIndex((v) => v.pid === action.payload)
            console.log('jjjjjj', index);

            state.cart[index].qty++

        },
        decrementQty: (state, action) => {
            const index = state.cart.findIndex((v) => v.pid === action.payload)
            console.log('jjjkkkkkkkkjjj', index);
            if (state.cart[index].qty > 1) {
                state.cart[index].qty--
            }
        }

    }
})

export const { addtocart, incrementQty, decrementQty } = cartSlice.actions
export default cartSlice.reducer