import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className='headerLeft'>
        <p>TSM HOTEL</p>
      </div>
      <div className='headerRight'>
        <NavLink to={'/Homepage'} >
          Homepage
        </NavLink>
        <NavLink to={'/Menu'} >
          Menu
        </NavLink>
        <NavLink to={'/Reservation'} >
          Reservation
        </NavLink>
        <NavLink to={'/Aboutus'} >
          About Us
        </NavLink>
      </div>
    </header>

  )
}

export default Navbar

