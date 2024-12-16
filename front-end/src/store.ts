import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from './features/applicationSlice'

export const store = configureStore({
    reducer : applicationReducer
})