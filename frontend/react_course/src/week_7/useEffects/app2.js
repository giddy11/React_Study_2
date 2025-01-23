import React, { useEffect, useState } from 'react'


export default function App2() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")

    //this is the first syntax for use effect
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    //this is the second syntax for use effect
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }, [])

    //theird way of useeffect
    useEffect(() => {
        document.title = `Count: ${count} Color: ${color}`
    }, [count, color])

    return (
        <div>
            <h1 style={{color: color}}>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setColor(c => c === "green" ? "red" : "green")}>Change Color</button>
        </div>
    )
}


/**
 * useeffects are side effects as a result of a state change
 * 
 * useEffect(function, dependencies)
 * 
 * 1. useEffect(() => {}) - runs after every re render
 * 2. useEffect(() => {}, []) - runs only once that is the first visit to the page
 * 3. useEffect(() => {}, [value]) - runs whenever there is a change in the value or the dependency
 * 
 * USES:
 * 1. Event Listeners
 * 2. Subscription (real time updates)
 * 3. Fetching data from an API
 * 
 */