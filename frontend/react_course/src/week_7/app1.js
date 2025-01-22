import React, { useEffect, useState } from 'react'

export default function App1() {
    let [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`The count inside useeffect is ${count}`)
    })

    console.log(`The count outside useeffect is ${count}`)

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(++count)}>click</button>
    </div>
  )
}


/**
 * UseEffects is a hook in react that lets you perform side effects in your functional components
 * 
 * useEffect(() => {
 *  Your code here which is the side effects
 * }, [dependencies])
 */