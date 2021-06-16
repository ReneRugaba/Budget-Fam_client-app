

export const tokenAction=(token:string|null):object=>{
    return {
        type:"ADD_TOKEN",
        token:token
    }
}