

export const roleAction=(role:string|null):object=>{
    return {
        type:"ADD_ROLE",
        role:role
    }
}