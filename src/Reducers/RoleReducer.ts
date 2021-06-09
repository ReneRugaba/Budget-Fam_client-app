import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';

interface role{

    role:string
}

const initialState:role={
    role:""
}

export const roleReducer=createSlice({
    name:"ROLE_REDUCER",
    initialState,
    reducers:{
        roleByAmount(state,Action:PayloadAction<string>){
            state.role=Action.payload
        }
    }
})