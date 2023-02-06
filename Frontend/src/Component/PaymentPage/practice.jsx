import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from './schemas'

const Practice = () => {
 const Formik=useFormik({
    initialValues:{
        practice_name:""
    },
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
        console.log("clicked")
   alert(JSON.stringify(values,null,2))
    }
 })
 //console.log(Formik.errors)
  return (
    <div><form onSubmit={Formik.handleSubmit}>
        <Input placeholder='Enter practice name' onChange={Formik.handleChange} value={Formik.values.practice_name} name="practice_name" onBlur={Formik.handleBlur}/>
        {Formik.errors.practice_name&&Formik.touched.practice_name?<p className='errors'>{Formik.errors.practice_name}</p>:null}
    
        <Button type='submit'>submit</Button>
        </form></div>
  )
}

export default Practice