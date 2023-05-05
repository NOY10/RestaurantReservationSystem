import React, { useRef, useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import "./Navbar.css";
import { FaBars, FaTimes} from 'react-icons/Fa';

const Navbar = () => {
  const [clicked,setClicked] = useState(false);

  const showMenu= () =>{
    setClicked(!clicked)
  }
  return (
    <header>
      <div className='headerLeft'>
      <img src={logo} class="logo"/>
      </div>
        <div className={clicked ? 'navMenu' : 'navMenu close'} onClick={showMenu}>
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
      <div className='menu_icon' onClick={showMenu}>
        {clicked ? <FaTimes />:<FaBars />}
      </div>
    </header>

  )
}

export default Navbar

