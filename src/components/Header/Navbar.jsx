import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className='headerLeft'>
      <img src={logo} class="logo"/>
      </div>
      <div className='headerRight'>
        <div className='anima'>
          <NavLink to={'/Homepage'} >
            Home
          </NavLink>
          <span className='focus-broder'></span>
        </div>
        <div className='anima'>
          <NavLink to={'/Menu'} >
            Menu
          </NavLink>
          <span className='focus-broder'></span>
        </div>
        <div className='anima'>
          <NavLink to={'/Reservation'} >
            Reservation
          </NavLink>
          <span className='focus-broder'></span>
        </div>
        <div className='anima'>
          <NavLink to={'/Aboutus'} >
            About Us
          </NavLink>
          <span className='focus-broder'></span>
        </div>

        <div className='register'>
          <button className='Rbtn'>
            <NavLink to={'/login'} >
              Log in
            </NavLink>
          </button>
          <button className='Rbtn'>
            <NavLink to={'/Honepage'} >
              Log out
            </NavLink>
          </button>
        </div>
        
      </div>  
    </header>

  )
}

export default Navbar

