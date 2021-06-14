
import { useState } from 'react';
import "./login.css";
import ModalPageAccueil from './ModalPageAccueil';

export interface SubmitCenterValues{
    action:string
    values:{}
}
export default function Login() {
    
    
//    const {emailReducer}= useSelector((state:RootState)=>state)
//    const dispatch=useDispatch()
   const [state, setstate] = useState({form:1})

//    useEffect(()=>{
//        dispatch(emailAction("email"))
//    },[dispatch])

    const submitCenter=(values:SubmitCenterValues)=>{
        console.log(values)
    }
    
    return (
            <>
            <div className="text-white font-extrabold  justify-center items-center">
                <h1 className="relative text-center w-auto my-6 mx-auto max-w-sm">Welcome to <span className="font-serif animate-pulse  text-yellow-300">manage-budget.com</span></h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-7 h-7 relative w-auto my-6 mx-auto max-w-sm" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            <ModalPageAccueil form={state.form} submitCenter={submitCenter} setForm={setstate}/>
            </>
         )
}
