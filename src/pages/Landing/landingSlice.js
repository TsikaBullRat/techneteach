import { createSlice } from "@reduxjs/toolkit";

export const slideSlice = createSlice({
    name: "slider",
    initialState: {
        value: 0
    },
    reducers: {
        startPage: ( state ) =>{

        }
    }
})

export const { startPage } = slideSlice.actions
export default slideSlice.reducer