interface Id{
    id:number|undefined
}

const initialState:Id={
    id:0
}
type ActionId={type:"ADD_ID",id:number}

export const idReducer=(state:Id=initialState,action:ActionId)=>{
    switch (action.type) {
        case "ADD_ID":
            
            return {...state,id:action.id}
    
        default:
            return state
    }
}