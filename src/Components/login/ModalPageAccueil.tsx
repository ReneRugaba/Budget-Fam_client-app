import React, {Dispatch,SetStateAction} from 'react'

export interface PropsStateHooks{
    form:number
    setForm:Dispatch<SetStateAction<{form:number}>>
}

export default function ModalPageAccueil(props:PropsStateHooks) {
    
    return (
        <div className="h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
           {/* center everything here */}
           <div className="relative w-auto my-6 mx-auto max-w-sm">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-blue-900 ">
                {/* header */}
                
                <div className='flex items-start justify-between p-5 rounded-t justify-items-end'>
                        <div className="inline-flex">
                            <button className={props.form===1 ? "bg-yellow-400  font-bold py-2 px-4 rounded-l":"bg-blue-400 hover:bg-yellow-400 font-bold py-2 px-4 rounded-r "} onClick={()=>props.setForm({form:1})}>
                                Login
                            </button>
                            <button className={props.form===2 ? "bg-yellow-400  font-bold py-2 px-4 rounded-l":"bg-blue-400 hover:bg-yellow-400 font-bold py-2 px-4 rounded-r "} onClick={()=>props.setForm({form:2})}>
                                Subscribe
                            </button>
                        </div>
                </div>
                
                {/* body */}
                <div className="relative p-6">
                    {props.form===1 ?
                        "formulaire de connection"
                    :
                    "formulaire de souscription"
                    }
                </div>
                {/* footer */}
            </div>
           </div>
        </div>
    )
}
