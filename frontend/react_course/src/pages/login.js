import React, { useState } from 'react'
import { login } from '../helper';

export const Login = () => {
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div style={{backgroundColor: "blue", color: "white", padding: "10px"}}>
        <h1>Login Form</h1>
        <label htmlFor="email2">Email</label>
        <br/>
        <input type="email" id="email2" placeholder="Email" value = {email2} onChange={(e) => setEmail2(e.target.value)}/>
        <br/>
        <label htmlFor="password2">Password</label>
        <br/>
        <input type="password" id="password2" placeholder="password" vlaue = {password2} onChange={(e) => setPassword2(e.target.value)}/>
        <br/>

        <button onClick={login}>Login</button>
        <br/>
        <p id="result2">-------Result-------</p>
    </div>
  )
}

export default Login