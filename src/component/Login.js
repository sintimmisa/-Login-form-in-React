import React from 'react';

import './myStyle.css'

const Login = () => {


    //Form State
    const [username,setUsername]=('');
    const [email,setEmail]=('');
    const [password,setPassword]=('');

  return (
    <div className='container'>
        <div className='form-container'>
            <h2>Login Form</h2>
            <form>
                <div className='form-group'>
                    <label>Username</label>
                    <input type='text' value ={username} onChange={(e)=>setUsername(e.target.value)}/>

                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' value ={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

                </div>
                <button className='btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;