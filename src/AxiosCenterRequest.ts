import axios from "axios";
import { MembersInerface } from './Interface/MembersInterface';


const apiBackEnd= axios.create({
    baseURL:"http://localhost:8000/api"
})

apiBackEnd.interceptors.response.use(
    resp=>{
        return resp
    },
    err=>{
        return err
    }
)

class AxiosCenterRequest {
   getMembers(token:string){
       return apiBackEnd.get<MembersInerface[]>("/members/2",{
        headers: {
            Authorization: "Bearer " + token,
          }
       })
   }
}

export const AxiosCenter= new AxiosCenterRequest()



