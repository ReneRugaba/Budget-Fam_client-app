export interface sexeMember{
    sexe:string
}

const initialState={
    sexe:""
}

export type ActionSexeMember={type:"ADD_SEXE-MEMBER",sexe:string}

export const SexeMemberReducer=(state:sexeMember=initialState,action:ActionSexeMember)=>{
    switch(action.type){
        case "ADD_SEXE-MEMBER":
            return {...state,sexe:action.sexe}
        default:
            return state
    }
}