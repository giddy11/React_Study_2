import React from 'react'
import '../index.css'
import { getProducts } from '../repository/products'

export default function Jumia_homepage() {
  return (
    <div>
        <h1>Welcome to my Jumia Application</h1>

        <div className='home-container'>
            {
                getProducts().map(item => (
                    <div>
                        <img src={item.img}/>
                        <h4>{item.name}</h4>
                        <p>{item.currency} {item.price}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
