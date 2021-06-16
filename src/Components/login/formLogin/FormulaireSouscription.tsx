import React from 'react'
import { PropsState } from './FormLogin';
import { Form, Formik, Field } from 'formik';
import * as Yup from "yup"
import { INPUTCustom } from '../../../shared/inputCustomForm';
import { ErrorMessage } from 'formik';

export interface SubscribeInitialValues{
    nom:string
    prenom:string
    email:string 
    password:string
}

export default function FormulaireSouscription(props:PropsState) {
    const subscibeValues:SubscribeInitialValues={
        nom:"",
        prenom:"",
        email:"",
        password:""
    }

    const submit=(values:SubscribeInitialValues)=>{
        props.SubmitCenterValues({
            action:"SUBSCRIBE",
            values:values
        })
    }

    const validationSchema=Yup.object().shape({
        nom:Yup.string().required(),
        prenom:Yup.string().required(),
        email:Yup.string().required(),
        password:Yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!")
    })

    return (
        <Formik
        initialValues={subscibeValues}
        onSubmit={submit}
        validationSchema={validationSchema}
        >
        {({handleBlur,handleChange})=>(
            <Form>
                <div className="my-5 text-lg">
                    <Field
                        id="nom"
                        name="nom"  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        placeHolder="First-name" 
                        className="bg-gray-200 font-bold appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  
                        type="text" 
                        component={INPUTCustom} />
                    <div className="text-red-500 font-bold">
                        <ErrorMessage  name="nom"/>
                    </div>
                </div>
                <div className="my-5 text-lg">
                    <Field
                        id="prenom"
                        name="prenom"  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        placeHolder="Last-name" 
                        className="bg-gray-200 font-bold appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  
                        type="text" 
                        component={INPUTCustom} />
                    <div className="text-red-500 font-bold">
                        <ErrorMessage  name="prenom"/>
                    </div>
                </div>
                <div className="my-5 text-lg">
                    <Field
                        id="email"
                        name="email"  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        placeHolder="Email" 
                        className="bg-gray-200 font-bold appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  
                        type="text" 
                        component={INPUTCustom} />
                    <div className="text-red-500 font-bold">
                        <ErrorMessage  name="email"/>
                    </div>
                </div>
                <div className="my-5 text-lg">
                    <Field
                        id="password"
                        name="password"  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        placeHolder="Password" 
                        className="bg-gray-200 font-bold appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  
                        type="password" 
                        component={INPUTCustom} />
                    <div className="text-red-500 font-bold">
                        <ErrorMessage  name="password"/>
                    </div>
                </div>
                <div className="container flex justify-center">
                    <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
                </div>
            </Form>
        )}
        </Formik>
    )
}
