import React, { useState } from 'react'
import { signup } from '../helper'

function Signup() {
  // const fullname = "";
  // const email = "";
  // const password = "";

  // const setFullName = ""
  // const setEmail = ""
  // const setPassword = ""
  /**
   * dob
   * ph no
   * state
   * country
   * gender
   */

  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dob, setDob] = useState("")
  const [num, setNum] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [gender, setGender] = useState("")

  console.log("test")


  return (
    <div style={{backgroundColor: "red", color: "white", padding: "10px"}}>
        <h1>Sign Up Form</h1>
        <label for="fullname">Full Name</label>
        <br/>
        <input type="text" id="fullname" placeholder="full name" value={fullname} onChange={(e) => setFullName(e.target.value)}/>
        <br/>
        <label for="email">Email</label>
        <br/>
        <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <label for="password">Password</label>
        <br/>
        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>

        <button onclick={signup}>Sign up</button>
        <br/>
        <p id="result1">-------Result-------</p>
    </div>
  )
}

export default Signup