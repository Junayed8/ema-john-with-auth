import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firease.init';

const [email, setEmail]= useState('');
const [password, setPassword]= useState('');
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate= useNavigate();

const handleEmailBlur= event=>{
    setEmail(event.target.value);
}

const handlePasswordBlur= event=>{
    setPassword(event.target.value);
}

if(user){
     navigate('/shop');
}

const handleUserSignIn= event=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
}

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
           <form onSubmit={handleUserSignIn}>
           <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type='email' name='email' required/>
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input onBlur={handlePasswordBlur} type='password' name='password' required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>

            {
                loading && <p>Loading...</p>
            }
            <input className='form-submit' type='submit' value="Login"/>
           </form>
           <p>
            New to Ema-john? <Link className='form-link' to='/signup'> Create an account</Link>
           </p>
        </div>
    );
};

export default Login;