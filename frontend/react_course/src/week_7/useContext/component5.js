import React, { createContext, useContext, useState } from 'react'
import Component1, { UserContext } from './component1'



export default function Component5(props) {
    const user = useContext(UserContext)
    

  return (
    <div className='box'>
        <h1>Component 5</h1>
        <p>Goodbye {user}</p>


        {/* <Component1/> */}

    </div>
  )
}
