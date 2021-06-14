import { ErrorMessage, Field, Form, Formik} from 'formik'
import { INPUTCustom } from '../../../shared/inputCustomForm'
import * as Yup from "yup";
import { SubmitCenterValues } from './../Login';


interface initialValues{
    email:string
    password:string
}
export interface PropsState{
    SubmitCenterValues(values:SubmitCenterValues):void
}
export const FormLogin=(props:PropsState)=> {
    const initialValuesForm:initialValues={email:"", password:""}

    const submit=(values:initialValues)=>{
        props.SubmitCenterValues({
            action:"LOGIN",
            values:values
        })
    }
    const schemaValidation=Yup.object().shape({
        email:Yup.string().required("Require field!").email(),
        password:Yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!")
    })

    return (
        <Formik
        initialValues={
            initialValuesForm
        }
        onSubmit={(values:initialValues)=>submit(values)}
        validationSchema={schemaValidation}
        >
       {({handleChange,handleBlur})=>(
           <Form>
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
                    className="bg-gray-200 font-bold appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    type="text" 
                    component={INPUTCustom}/>
           <div className="text-red-500 font-bold">
                <ErrorMessage name="password"/>
           </div>
           </div  >
          <div className="container flex justify-center">
                <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Soumettre</button>
          </div>
       </Form>
       )}
            
        </Formik>
    )
}
