import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
interface nom{
    nom:string
}
const initialState:nom={
    nom:""
}

export const nomReducer =createSlice({
    name:"NOM_REDUCER",
    initialState,
    reducers:{
        nomByAmount:(state,action:PayloadAction<string>)=>{
            state.nom=action.payload
        }
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch