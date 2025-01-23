import React, { createContext, useState } from 'react'
import Component2 from './component2'

export const UserContext = createContext() //the first step

export default function Component1() {
    const [user, setUser] = useState("emma123")

  return (
    <div className='box'>
        <h1>Component 1</h1>
        <h2>Welcome {user}</h2>
        {/* Create the wrapper to make the value accessible to all the components */}
        <UserContext.Provider value={user}>
            <Component2/>
        </UserContext.Provider>
        
    </div>
  )
}
