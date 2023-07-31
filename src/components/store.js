import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './newsSlice'

export default configureStore({
    reducer:{
        news: newsReducer,
    }
})