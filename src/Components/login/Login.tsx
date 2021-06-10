
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { useEffect } from 'react';
import { emailAction } from '../../actions/emailAction';


export default function Login() {
    
    
   const {emailReducer}= useSelector((state:RootState)=>state)
   const dispatch=useDispatch()

   useEffect(()=>{
       dispatch(emailAction("email"))
   },[dispatch])
    
    return (
        <div>
            hello world! {emailReducer.email}
        </div>
    )
}
