import React, { useState } from 'react'
import { signup } from '../helper'

function Signup2() {

    const [signupDetails, setSignupDetails] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const updateChangesHandler = (e) => {
        setSignupDetails({...signupDetails, [e.target.name]: e.target.value});
    }

  return (
    <div style={{backgroundColor: "red", color: "white", padding: "10px"}}>
        <h1>Sign Up Form</h1>
        <label htmlFor="fullname">Full Name</label>
        <br/>
        <input type="text" id="fullname" placeholder="full name" name='fullname' value={signupDetails.fullname} onChange={updateChangesHandler}/>
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input type="email" id="email" placeholder="Email" name='email' value={signupDetails.email} onChange={updateChangesHandler}/>
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input type="password" id="password" placeholder="password" name='password' value={signupDetails.password} onChange={updateChangesHandler}/>
        <br/>

        {/* /login */}

        <button onClick={() => signup(signupDetails.fullname, signupDetails.email, signupDetails.password)}>Sign up</button>
        <br/>
        <p >-------Result-------</p>
    </div>
  )
}

export default Signup2