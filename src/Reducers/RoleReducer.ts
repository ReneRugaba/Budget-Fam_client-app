interface Role{
    role:string
}

const initialState={
    role:""
}

export type ActionRole={type:"ADD_ROLE",role:string}

export const roleReducer=(state:Role=initialState,action:ActionRole)=>{
    switch(action.type){
        case "ADD_ROLE":
            return {...state,role:action.role}
        default:
            return state
    }
}

