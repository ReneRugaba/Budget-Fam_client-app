import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';

export default function Accueil() {
    const {nomReducer,prenomReducer}=useSelector((state:RootState)=>state)
    return (
        <div>
            HELLO {nomReducer.nom} {prenomReducer.prenom}!!
        </div>
    )
}
