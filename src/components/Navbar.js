import React from 'react'
import './Navbar.css'
import logo from './assets/airsiallogo2.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <h4>021-111-247-742</h4>
        <div className="links">
            <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#news">ABOUT US</a></li>
        <li><a href="#contact">SERVICES</a></li>
        <li><a href="#about">DESTINATIONS</a></li>
        <li><a href="#contact">CAREERS</a></li>
        <li><a href="#about">CONTACT</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
