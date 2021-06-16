
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import { RootState } from '../Reducers/rootReducer';
import Login from './login/Login';
import Accueil from './accueil/Accueil';



// const RouterPage = (
//     props: { pageComponent: JSX.Element } & RouteComponentProps
//   ) => props.pageComponent;


const PrivateRoute=({component:Component,token,role,...rest})=>
    (
        <Route
        {...rest}
        render={props=>
        (token && token!=="" && role && role!=="")?(
            <Component {...props }/>
        ):(
            <Redirect to={{pathname:"/"}}/>
        )}
        />
    )



export default function Routes() {
    const {tokenReducer,roleReducer}=useSelector((state:RootState)=>state)
    return (
        <>
            {tokenReducer.token!=="" && roleReducer.role!==""?
            <Switch>
                <PrivateRoute token={tokenReducer} path="/accueil" component={Accueil} role={roleReducer} extact/>
            </Switch>:
            <Route exact component={Login}/>}
        </>
    )
}
