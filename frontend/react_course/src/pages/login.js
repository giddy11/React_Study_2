import React from 'react'

export const Login = () => {
  return (
    <div style={{backgroundColor: "blue", color: "white", padding: "10px"}}>
        <h1>Login Form</h1>
        <label for="email2">Email</label>
        <br/>
        <input type="email" id="email2" placeholder="Email"/>
        <br/>
        <label for="password2">Password</label>
        <br/>
        <input type="password" id="password2" placeholder="password"/>
        <br/>

        <button onclick="login()">Login</button>
        <br/>
        <p id="result2">-------Result-------</p>
    </div>
  )
}
