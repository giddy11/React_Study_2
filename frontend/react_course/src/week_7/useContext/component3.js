import React, { useContext, useState } from 'react'
import Component4 from './component4'
import { UserContext } from './component1'

export default function Component3() {
        const user = useContext(UserContext)

  return (
    <div className='box'>
        <h1>Component 3</h1>
        <h1>Hellooooo {user}</h1>
        <Component4/>
    </div>
  )
}
