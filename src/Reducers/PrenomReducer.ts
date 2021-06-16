
export interface Prenom{
    prenom:string
}


const initialState={
    prenom:""
}

export type ActionPrenom={type:"ADD_PRENOM",prenom:string}

export const prenomReducer=(state:Prenom=initialState,action:ActionPrenom)=>{
   
    switch (action.type) {
        case "ADD_PRENOM":
            return {...state,prenom:action.prenom}
    
        default:
            return state
    }
}