import React from 'react'
import { Nom } from './../../Reducers/NomReducer';
import { Prenom } from './../../Reducers/PrenomReducer';
import { sexeMemberAction } from './../../actions/sexeMemberAction';
import { sexeMember } from './../../Reducers/SexeMemberReducer';
import { Email } from './../../Reducers/EmailReducer';

interface cardmember{
    nomReducer:Nom,
    prenomReducer:Prenom,
    SexeMemberReducer:sexeMember,
    emailReducer:Email

}
export default function CardMembers(props:cardmember) {
    return (
        <div className="py-3 font-bold text-shadow-lg">
        <div className="bg-white sm:max-w-lg sm:mx-auto shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex">
          <div className="h-40 overflow-visible w-auto">
              <img className="rounded-3xl h-60 shadow-lg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt=""/>
          </div>
          <div className="flex justify-center flex-col ml-3  w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-8md font-bold"><span className="text-purple-700">Email:</span> {props.emailReducer.email}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-800">
                  <h2><span className="text-purple-700">Nom:</span> {props.SexeMemberReducer.sexe==="male"?"Mr ":"Mme "} {props.nomReducer.nom}</h2>
              </div>
              <div className="text-lg mt-2 text-gray-800">
              <h2><span className="text-purple-700">Prenom:</span> {props.prenomReducer.prenom}</h2>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    )
}
