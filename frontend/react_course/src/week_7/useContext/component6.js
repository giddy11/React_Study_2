import React, { useContext, useState } from 'react'
import { UserContext } from './component1'

export default function Component6() {

    const user = useContext(UserContext)


  return (
    <div className='box'>
        <h1>Component 6</h1>
        <h3>I want to see {user}</h3>
    </div>
  )
}
