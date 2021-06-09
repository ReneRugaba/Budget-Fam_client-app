import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";

interface id {
    id:number
}
const initialState:id={
    id:0
}
export const idReducer=createSlice({
    name:"ID_REDUCER",
    initialState,
    reducers:{
       
        idByAmount:(state,action:PayloadAction<number>)=>{
            state.id=action.payload
        }
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch