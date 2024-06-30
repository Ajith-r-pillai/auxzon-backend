import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
//   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const validate = () => {
    const errors = {}

    if (!email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid'
    }

    if (!password) {
      errors.password = 'Password is required'
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8000/cart/userLogin', { email, password })
        // console.log(response.data)
        // navigate('/')
      } catch (error) {
        alert(error.response.data.message);
    //  if (error.response.data) {
 
    //     setErrors(error.response.data.message); // Assuming error response structure has a 'message' field
    //   }
      
    
    }
    }
  }

  return (
    <div className='reg-main'>
      <div className='form login'>
        <div className='form-content'>
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div className='field input-field'>
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className='field input-field'>
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {errors.form && <p className="error">{errors.form}</p>}
            <div className='form-link'>
              <a href="#" className='forgot-pass'>Forgot password?</a>
            </div>
            <div className='field button-field'>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className='form-link'>
            {/* <span>Don't have an account? <Link to={'/register'}>Create new account</Link></span> */}
          </div>
        </div>
        <div className='line'></div>
        <div className='media-options'>
          <a href="#" className='field facebook'>
            <img src="https://i.postimg.cc/BvRFsXWZ/fb.png" alt="" className='google-img' />
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className='media-options'>
          <a href="#" className='field google'>
            <img src="https://i.postimg.cc/wThYQPxw/g.png" alt="" className='google-img' />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
