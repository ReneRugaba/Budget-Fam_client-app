


export interface Email{
    email:string|undefined
}

const initialState:Email={
    email:""
}
type ActionEmail={type:"ADD_EMAIL",email:string}

export const emailReducer=(state:Email=initialState,action:ActionEmail)=>{
    switch (action.type) {
        case "ADD_EMAIL":
            
            return {...state,email:action.email}
    
        default:
            return state
    }
}