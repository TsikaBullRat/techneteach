import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./pages/Landing/landingSlice"

export default configureStore({
    reducer: {
        slider: slideReducer
    },
})