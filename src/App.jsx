import { useState } from 'react'
import { useFormik } from 'formik'
import './App.css'
import {signUpSchema} from './signUpvalidation'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function App() {
  const [count, setCount] = useState(0)
  const {values, handleChange, handleSubmit, handleBlur,errors,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name} />
        {errors.name && touched.name && <p>{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input type='email' id='email' name='email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email} />
        {errors.email && touched.email && <p>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input type='password' id='password' name='password'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type='password' id='confirmPassword' name='confirmPassword'
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange} />
        {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default App
