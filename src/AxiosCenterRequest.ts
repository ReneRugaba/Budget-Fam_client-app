import axios from "axios";
import { MembersInerface } from './Interface/MembersInterface';
import { TokenInterface } from './Interface/TokenInterface';
import { configUrl } from './Config/configUrl';


const apiBackEnd= axios.create({
    baseURL:"http://localhost:8000/"
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
   getMember(token:string, email:string){
       return apiBackEnd.get<MembersInerface>(configUrl.request.members.get,{
        params:{
            email:email
        },
        headers: {
            Authorization: "Bearer " + token,
          }
        
       })
   }

   loginMembers(values:{}){
    return apiBackEnd.post<TokenInterface>(configUrl.request.members.authentication_token,values)
   }

   createMembers(values:{}){
       return apiBackEnd.post<Response>(configUrl.request.members.get,values)
   }
}

export const AxiosCenter= new AxiosCenterRequest()



