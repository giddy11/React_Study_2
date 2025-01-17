import React from 'react'

export default function Header() {
  return (

    /**
     * TODO: ASSIGNMENT 2
     * Use the header from arsha
     */
    <div >
      <div class= "holder">
         <header>
                <div class="logo">
                    <p>ARSHA</p>
                </div>
                {/* <!-- 
                    TODO: Please word on the links
                --> */}
                <div class="nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Services</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Team</a>
                        <a href="#">Pricing</a>
                        <a href="#">Dropdown<i class="fa-solid fa-chevron-down"></i></a>
                        <a href="#">Contact</a>
                        <button class="start">Get Started</button>
                </div>
            </header>
          </div>
    </div>
  )
}
