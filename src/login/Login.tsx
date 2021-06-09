import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Reducers/IdReducer';


export default function Login() {
    const {id,nom,email,role}=useSelector((state:RootState) => state)
    const dispatch=useDispatch()
    
    useEffect(() => {
        
       
    }, [])

    return (
        <div>
            hello world!
        </div>
    )
}
