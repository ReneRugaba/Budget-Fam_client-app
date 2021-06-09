import { configureStore} from "@reduxjs/toolkit";
import { idReducer } from "./Reducers/IdReducer";
import { nomReducer } from "./Reducers/NomReducer";
import { emailReducer } from './Reducers/EmailReducer';
import { roleReducer } from './Reducers/RoleReducer';




export const store= configureStore(
   {
       reducer:{
            id:idReducer.reducer,
            nom:nomReducer.reducer,
            email:emailReducer.reducer,
            role:roleReducer.reducer
       }
   }
)


export type RootState = ReturnType<typeof store.getState>
export type useAppDispatch= typeof store.dispatch

  
 