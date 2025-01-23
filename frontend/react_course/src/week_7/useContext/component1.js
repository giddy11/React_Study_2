import React, { createContext, useContext, useState } from 'react'
import Component2 from './component2'
import { EmailContext } from './component5'

export const UserContext = createContext() //the first step

export default function Component1() {
    const [user, setUser] = useState("emma123")
    const email = useContext(EmailContext)


  return (
    <div className='box'>
        <h1>Component 1</h1>
        <h2>Welcome {user}</h2>
        <h2>Welcome {email} email</h2>
        {/* Create the wrapper to make the value accessible to all the components */}
        <UserContext.Provider value={user}>
            <Component2/>
        </UserContext.Provider>
        
    </div>
  )
}
