
import NavBar from "./nav/NavBar"
import Routes from './Routes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Reducers/rootReducer';
import { tokenAction } from './../actions/tokenAction';
import { emailAction } from './../actions/emailAction';
import { idAction } from './../actions/idAction';
import { nomAction } from './../actions/nomAction';
import { roleAction } from './../actions/roleAction';
import "./component.css"
import { prenomAction } from './../actions/prenomAction';
import { useToasts } from 'react-toast-notifications';

export default function RouterNavigation() {
    const {tokenReducer,idReducer,roleReducer}=useSelector((state:RootState)=>state)
    const {addToast}=useToasts()
    const Dispatch=useDispatch()

    const logout=()=>{
        Dispatch(tokenAction(""))
        Dispatch(emailAction(null))
        Dispatch(idAction(null))
        Dispatch(nomAction(null))
        Dispatch(roleAction(""))
        Dispatch(prenomAction(""))
        addToast("Deconnexion effective!",
            {
                appearance: 'info',
                autoDismiss: true,
            }
        )
    }
        return (
        <div>
           {tokenReducer && idReducer && roleReducer ?
           (
               <>
                {tokenReducer && tokenReducer.token!==""&&(
                    <NavBar logout={logout} fixed/>
                )}
                <Routes/>
               </>
           )
           :
           <>
            <Routes/>
           </>
           }
        </div>
            )
    
}
