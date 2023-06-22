import React from 'react'
import "./Navbar.css"
import RestroLogo from "../images/RestroLogo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='nav-container'>
        <ul className='nav-links'>
            <li> <Link to='/About'>ABOUT</Link></li>
            <li> <Link to='/Menu'>MENU</Link></li>
            <li><Link to='/Reservation'>RESERVATION</Link></li>
            <li id='logo-image'><Link to='/Home'><img src={RestroLogo}  alt="resturant-logo" /></Link></li>
            <li><Link to='/News'>NEWS</Link></li>
            <li><Link to='/Location'>HOURS & LOCATION</Link></li>
            <li><Link to='/Email'>EMAIL US</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
