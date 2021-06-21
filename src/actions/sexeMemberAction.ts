

export const sexeMemberAction=(sexeMember:string|null):object=>{
    return {
        type:"ADD_SEXE-MEMBER",
        sexe:sexeMember
    }
}