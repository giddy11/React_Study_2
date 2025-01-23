import React, { createContext, useEffect, useState } from 'react'
import Component1 from './component1'
import Component6 from './component6'

export const EmailContext = createContext() //the first step



export default function App3() {
    const [email, setEmail] = useState("emma@gmail.com");


    return (
        <div>
            {/* <Component1/> */}
            {/* <Component6/> */}
            <EmailContext.Provider value={email}>
                <Component1/>
            </EmailContext.Provider>
        </div>
    )
}


/**
 * useContext() = it is a react hook that allows you to share values between multiple
 *                  levels of components without pasing props through each level or
 *                  preventing props drilling.
 * 
 * PROVIDER COMPONENT
 * 1. import {createContext} from 'react
 * 2. export const MyContext = createContext()
 * 3. <MyContext.Provider>
 * 
 * 
 * 
 * CONSUMER COMPONENT
 * 
 */