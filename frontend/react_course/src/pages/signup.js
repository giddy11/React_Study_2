import React from 'react'
import { signup } from '../helper'

function Signup() {
  return (
    <div style={{backgroundColor: "red", color: "white", padding: "10px"}}>
        <h1>Sign Up Form</h1>
        <label for="fullname">Full Name</label>
        <br/>
        <input type="text" id="fullname" placeholder="full name"/>
        <br/>
        <label for="email">Email</label>
        <br/>
        <input type="email" id="email" placeholder="Email"/>
        <br/>
        <label for="password">Password</label>
        <br/>
        <input type="password" id="password" placeholder="password"/>
        <br/>

        <button onclick={signup}>Sign up</button>
        <br/>
        <p id="result1">-------Result-------</p>
    </div>
  )
}

export default Signup