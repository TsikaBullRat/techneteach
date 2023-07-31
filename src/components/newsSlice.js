import {  createSlice } from "@reduxjs/toolkit"

export const newsSlice = createSlice({
    name: "news",
    initialState:{
        value: []
    },
    reducers: {
        addArticles:(state, action)=>{
            try{
                state.value = [...action.payload]
            }catch(err){
                console.log("Awaiting data")
            }
        }
    }
})

export const { addArticles } = newsSlice.actions
export default newsSlice.reducer