import { configureStore} from "@reduxjs/toolkit";
import { idReducer } from "./Reducers/IdReducer";
import { nomReducer } from "./Reducers/NomReducer";




export const store= configureStore(
   {
       reducer:{
            id:idReducer.reducer,
            nom:nomReducer.reducer
       }
   }
)


export type RootState = ReturnType<typeof store.getState>
export type useAppDispatch= typeof store.dispatch

  
 