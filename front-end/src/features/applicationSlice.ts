import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    application : {
        id : 0
    }
}

export const applicationSlice = createSlice({
    name : 'application',
    initialState,
    reducers : {
        addId : (state,action) =>{
            state.application.id = action.payload.id;
        },

    }
})

export const {addId} = applicationSlice.actions 
export default applicationSlice.reducer   