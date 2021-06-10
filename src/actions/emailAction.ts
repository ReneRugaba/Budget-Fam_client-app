

export const emailAction=(email:string):object=>{
    return{
        type:"ADD_EMAIL",
        email:email
    }
}