import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
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

  )
}

export default Navbar

