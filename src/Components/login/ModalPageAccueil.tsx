import React, {Dispatch,SetStateAction} from 'react'
import { FormLogin } from './formLogin/FormLogin';
import FormulaireSouscription from './formLogin/FormulaireSouscription';
import { SubmitCenterValues } from './Login';

export interface PropsStateHooks{
    form:number
    submitCenter(values:SubmitCenterValues):void
    setForm:Dispatch<SetStateAction<{form:number}>>
}

export default function ModalPageAccueil(props:PropsStateHooks) {
    
    return (
        <div className="h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
           {/* center everything here */}
           <div className="relative w-auto my-6 mx-auto max-w-sm">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-blue-900 ">
                {/* header */}
                
                <div className='flex items-start justify-between p-5 rounded-t justify-between'>
                        <div className="inline-flex">
                            <div className={props.form===1 ? "justify-center bg-yellow-400 mr-3 font-bold p-4 rounded-full":"justify-center bg-blue-400 mr-3 hover:bg-yellow-400 font-bold p-4  rounded-full "} onClick={()=>props.setForm({form:1})} title="Login">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            </div>
                            <div className={props.form===2 ? "justify-center bg-yellow-400 mr-3  font-bold p-4  rounded-full":"justify-center bg-blue-400 mr-3 hover:bg-yellow-400 font-bold p-4  rounded-full "} onClick={()=>props.setForm({form:2})} title="Subscribe">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </div>
                        </div>
                </div>
                
                {/* body */}
                <div className="relative p-6">
                    {props.form===1 ?
                        <FormLogin SubmitCenterValues={props.submitCenter}/>
                    :
                        <FormulaireSouscription SubmitCenterValues={props.submitCenter}/>
                    }
                </div>
                {/* footer */}
            </div>
           </div>
        </div>
    )
}
