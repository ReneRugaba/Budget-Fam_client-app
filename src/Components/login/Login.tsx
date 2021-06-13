
import { useState } from 'react';
import "./login.css";
import ModalPageAccueil from './ModalPageAccueil';


export default function Login() {
    
    
//    const {emailReducer}= useSelector((state:RootState)=>state)
//    const dispatch=useDispatch()
   const [state, setstate] = useState({form:1})

//    useEffect(()=>{
//        dispatch(emailAction("email"))
//    },[dispatch])
    
    return (
            <>
            <ModalPageAccueil form={state.form} setForm={setstate}/>
            </>
         )
}
