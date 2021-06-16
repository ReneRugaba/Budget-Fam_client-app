

export const nomAction=(nom:string|null):object=>{
    return {
        type:"ADD_NOM",
        nom:nom
    }
}