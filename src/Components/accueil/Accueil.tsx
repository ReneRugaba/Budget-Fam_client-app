import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import CardMembers from './CardMembers';


export default function Accueil() {
    const {nomReducer,prenomReducer,SexeMemberReducer,emailReducer}=useSelector((state:RootState)=>state)
    return (
        <div className="grid grid-colsfilter_5 gap-4">
            <div className="grid-rows-3 ">
                <div>
                    <CardMembers nomReducer={nomReducer} prenomReducer={prenomReducer} SexeMemberReducer={SexeMemberReducer} emailReducer={emailReducer}/>
                </div>
                <div className="row-span-2">
                {/* tableaux et forms  */}
                </div>
            </div>
            <div className="col-span-3">

            </div>
        </div>
    )
}
