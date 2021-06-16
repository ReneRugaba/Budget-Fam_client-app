

export const emailAction=(email:string|null):object=>{
    return{
        type:"ADD_EMAIL",
        email:email
    }
}