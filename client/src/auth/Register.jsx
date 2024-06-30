import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!profilePic) {
      errors.profilePic = 'Profile image is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const formData = new FormData();
        formData.append('id', Math.floor(Math.random() * 1000)); 
        formData.append('username', name);
        formData.append('useremail', email);
        formData.append('userpassword', password);
        formData.append('profilePic', profilePic);

        const response = await axios.post('http://localhost:8000/cart/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data);
        // Optionally, redirect to login page or show success message
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle error response from server (e.g., display error message)
      }
    }
  };

  return (
    <div className='reg-main'>
      <div className='form'>
        <div className='form-content'>
          <header>Sign Up</header>
          <form onSubmit={handleSubmit}>
            <div className='field input-field'>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className='error'>{errors.name}</p>}
            </div>
            <div className='field input-field'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='field input-field'>
              <input
                type='file'
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
              {errors.profilePic && <p className='error'>{errors.profilePic}</p>}
            </div>
            <div className='field input-field'>
              <input
                type='password'
                placeholder='Set Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className='field button-field'>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
          <div className='form-link'>
            {/* <span>Already Signed Up? <Link to={'/login'}>Login</Link></span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


