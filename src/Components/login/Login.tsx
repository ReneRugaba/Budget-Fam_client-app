
import {  useState } from 'react';
import "./login.css";
import ModalPageAccueil from './ModalPageAccueil';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { AxiosCenter } from '../../AxiosCenterRequest';
import { useDispatch } from 'react-redux';
import { tokenAction } from './../../actions/tokenAction';
import { initialValuesLogin } from './formLogin/FormLogin';
import { SubscribeInitialValues } from './formLogin/FormulaireSouscription';
import { useToasts } from 'react-toast-notifications';
import { idAction } from './../../actions/idAction';
import { emailAction } from './../../actions/emailAction';
import { nomAction } from './../../actions/nomAction';
import { roleAction } from './../../actions/roleAction';
import { useHistory } from 'react-router-dom';
import { prenomAction } from './../../actions/prenomAction';
import { configUrl } from './../../Config/configUrl';
import { sexeMemberAction } from './../../actions/sexeMemberAction';


export interface SubmitCenterValues{
    action:string
    values:initialValuesLogin |SubscribeInitialValues
}
export default function Login() {
    const {addToast}=useToasts()
    
  
   const dispatch=useDispatch()
   const [state, setstate] = useState({form:1})
   const [load,setLoad]=useState(false)
   const history=useHistory()

   



    const submitCenter=(objectSubmit:SubmitCenterValues)=>{
        
       
        setLoad(true)
        if (objectSubmit.action==="LOGIN") {
           AxiosCenter.loginMembers(objectSubmit.values)
                        .then(Response=>{
                            dispatch(tokenAction(Response.data.token))
                           if (Response.status===200) {
                            AxiosCenter.getMember(Response.data.token,objectSubmit.values.email)
                                        .then(res=>{
                                            const user=res.data["hydra:member"][0]
                                            dispatch(idAction(user.id))
                                            dispatch(emailAction(user.email))
                                            dispatch(prenomAction(user.prenom))
                                            dispatch(nomAction(user.nom))
                                            dispatch(roleAction(user.roles[0]))
                                            dispatch(sexeMemberAction(user.sexe))
                                           
                                            history.push("/accueil")
                                            addToast("Connexion réussit!",
                                                {
                                                    appearance: 'success',
                                                    autoDismiss: true,
                                                }
                                            )
                                        })
                           }
                        })
                        .catch(error=>{
                            addToast("Erreur lors de la connexion!",{
                                appearance: 'error',
                                autoDismiss: true,
                            })
                            history.push(configUrl.request.pageConnect)
                        });
                        
        }
        if(objectSubmit.action==="SUBSCRIBE"){
            
            AxiosCenter.createMembers(objectSubmit.values)
                        .then(Response=>{
                            if (Response.status===201) {
                                addToast("Votre compte a été créé avec succès!",{
                                    appearance: 'success',
                                    autoDismiss: true,
                                })
                                history.push(configUrl.request.pageConnect)
                            }
                        })
                        .catch(error=>{
                            addToast("Erreur lors de la création de vos données!",{
                                appearance: 'error',
                                autoDismiss: true,
                            })
                            history.push(configUrl.request.pageConnect)
                        })
        }
    }
    
    return (
    
            <>
            <div className="text-indigo-700 font-extrabold  justify-center items-center drop-shadow-lg">
                <h1 className="relative text-center w-auto my-6 mx-auto max-w-sm">Welcome to <span className="font-serif animate-pulse  text-gray-900">manage-budget.com</span></h1>
               {!load && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-7 h-7 relative w-auto my-6 mx-auto max-w-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
               )}
            {load?(<div className="load flex justify-center p-5 rounded-full space-x-3">
                        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
                    </div>)
                    :
                    <ModalPageAccueil  form={state.form} submitCenter={submitCenter} setForm={setstate}/>}
            </div>
            </>
         )
}
