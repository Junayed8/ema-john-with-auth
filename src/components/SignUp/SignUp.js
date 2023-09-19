import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import auth from '../../firease.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail]= useState('');
    const [password, SetPassword]= useState('');
    const [confirmPass, SetConfirmPass]= useState('');
    const [error, setError]= useState('');
    const [user, setUser]= useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail= event=>{
        setEmail(event.target.value);
    }

    const handlePassword= event=>{
        SetPassword(event.target.value);
    }
    const handleConfirmPassword= event=>{
        SetConfirmPass(event.target.value);
    }

    const handleCreateUser= event=>{
        setUser(event.target.value);
        event.preventDefault();
        if(password !==confirmPass){
            setError('Your password did not match');
            return;
        }

        if(password.length>6){
            setError('Your password is less than six characters');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Signup</h1>
           <form onSubmit={handleCreateUser}>
             <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmail} type='email' name='email' required/>
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePassword} type='password' name='password' required/>
                </div>
                <div className='input-group'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type='password' name='password'/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input  className='form-submit' type='submit' value='Sign Up'/>
            </form>    
           <p>
            Already have an account? <Link className='form-link' to='/login'> Login</Link>
           </p>
        </div>

    );
};

export default SignUp;