import { createSlice } from '@reduxjs/toolkit'

import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // extraReducers: { // quando vendo una torta regalo un gelato, quindi devo decrementare il numero di gelati ogni volta che viene venduta una torta
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // } // sotto una sintassi migliore usando una build function

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }


})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions