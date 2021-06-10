import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/rootReducer";





export const store= createStore(rootReducer,applyMiddleware(thunk))





  
 