
interface Token{
    token:string
}

const initialState={
    token:""
}

export type ActionToken={type:"ADD_TOKEN",token:string}

export const tokenReducer=(state:Token=initialState,action:ActionToken)=>{
    switch(action.type){
        case "ADD_TOKEN":
            return {...state,token:action.token}
        default:
            return state
    }
}