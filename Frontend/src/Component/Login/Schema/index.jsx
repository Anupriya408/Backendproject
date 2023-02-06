import * as yup from 'yup';

export const SignUpSchema=yup.object({
    fname:yup.string().min(2,"at least 2 characters").max(20).required("Please enter first name"),
    lname:yup.string().min(2,"at least 2 characters").max(20).required("Please enter last name"),
    email:yup.string().email().min(2,"at least 2 characters").max(30).required("please enter valid email address"),
    password:yup.string().min(6).required('Please enter valid Password'),
})