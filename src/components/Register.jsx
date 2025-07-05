import React, { useState } from 'react';
import {auth} from '../FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Register() {

    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[message,setMessage]= useState('');

    const registerUser = async (e)=>{
        e.preventDefault();

        

        try{
            const result = await createUserWithEmailAndPassword (auth,email,password);
            setMessage("User Registered!" +result.user.email);
        }catch(error){
            setMessage(error.message);
        }
    }
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">

                {message && (<div className='alert alert-warning'>{message}</div>)}
                <form onSubmit={registerUser} className="p-4 border rounded shadow bg-white" style={{ width: '100%', maxWidth: '400px' }}>
                    <h3 className="mb-4 text-center">Register</h3>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(data)=>setEmail(data.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter your password"
                             value={password}
                            onChange={(data)=>setPassword(data.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>

                    <div className="text-center mt-3">
                        <small className="text-muted">Already have an account? <a href="#login">Login</a></small>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register