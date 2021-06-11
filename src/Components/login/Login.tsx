
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
    
           
        <div className="p-6 max-w-sm mx-auto bg-yellow-300 focus-visible rounded-xl shadow-md flex items-center space-x-4">
           
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-blue-500">hello world! {emailReducer.email}</p>
                <input type="text" className='bg-yellow-300 border-t-0 border-l-0 border-r-0'/>
            </div>
        </div>
    )
}
