export const prenomAction=(prenom:string|null):object=>{
    return {
        type:"ADD_PRENOM",
        prenom:prenom
    }
}