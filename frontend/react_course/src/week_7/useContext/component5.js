import React, { createContext, useContext, useState } from 'react'
import Component1, { UserContext } from './component1'

export const EmailContext = createContext() //the first step


export default function Component5(props) {
    const user = useContext(UserContext)
    const email = useState("emma@gmail.com");
    

  return (
    <div className='box'>
        <h1>Component 5</h1>
        <p>Goodbye {user}</p>

        <h3>This is your mail - {email}</h3>

        <EmailContext.Provider value={email}>
            <Component1/>
        </EmailContext.Provider>
    </div>
  )
}
