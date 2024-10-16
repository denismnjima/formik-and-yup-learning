import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required('Please enter a valid name'),
    email:Yup.string().email().required('Please enter a valid email'),
    password:Yup.string().min(8).required('Please enter a valid password'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Please enter a valid password')
})