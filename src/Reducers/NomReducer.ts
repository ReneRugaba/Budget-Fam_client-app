

interface Nom{
    nom:string
}

const initialState={
    nom:""
}

export type ActionNom={type:"ADD_NOM",nom:string}

export const nomReducer=(state:Nom=initialState,action:ActionNom)=>{
    switch(action.type){
        case "ADD_NOM":
        return {...state,nom:action.nom}
        default:
            return state
    }
}