import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './newsSlice'
import canvasReducer from './canvasSlice'

export default configureStore({
    reducer:{
        news: newsReducer,
        canvas: canvasReducer
    }
})