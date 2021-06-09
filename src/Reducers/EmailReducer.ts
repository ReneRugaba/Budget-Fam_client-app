import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';


interface Email{
    email:string
}

const initialState:Email={
    email:""
}

export const emailReducer=createSlice({
    name:"EMAIL_REDUCER",
    initialState,
    reducers:{
        emailByAmount(state, Action:PayloadAction<string>){
            state.email=Action.payload
        }
    }
})