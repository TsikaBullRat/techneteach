import { createSlice } from "@reduxjs/toolkit";

export const canvasSlice = createSlice({
    name: "canvas",
    initialState:{
        value: null
    },
    reducers:{
        addDisplay: (state, action)=>{

        },
        removeDisplay: (state, action)=>{

        },
        setDisplay: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const { addDisplay, removeDisplay, setDisplay } = canvasSlice.actions
export default canvasSlice.reducer