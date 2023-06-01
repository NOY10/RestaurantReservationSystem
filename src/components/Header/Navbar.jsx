import React, { useRef, useState,useEffect } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import logo from '../img/logo.png';
import "./Navbar.css";
import { FaBars, FaTimes} from 'react-icons/Fa';
import { useDispatch,useSelector} from 'react-redux';
import { auth } from '../../config/firebase';
import { logout,selectUser } from '../../features/userSlice';

const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  const [Dclicked,setDClicked] = useState(false);
  const user = useSelector(selectUser);

  const showMenu= () =>{
    setClicked(!clicked)
  }
  const dialog = () => {
    setDClicked(!Dclicked)
  }

  const dispatch = useDispatch();
  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
      alert('logout');
      
      window.location.reload();
  };
  return (
    <header>
      <div className='headerLeft'>
        <img src={logo} className="logo"/>
      </div>
      <div className='headerRight'>
        <div className={clicked ? 'navMenu' : 'navMenu close'} onClick={showMenu}>
          {
            user ?
              user.email !== 'admin@gmail.com'?
              <>
                <div className='anima'>
                  <NavLink to={'/Homepage'}>
                    Home
                  </NavLink>
                  <span className='focus-broder'></span>
                </div>
                
                <div className='anima'>
                  <NavLink to={'/Menu'}>
                    Menu
                  </NavLink>
                  <span className='focus-broder'></span>
                </div>
                
                <div className='anima'>
                  <NavLink to={'/Reservation'}>
                    Reservation
                  </NavLink>
                  <span className='focus-broder'></span>
                </div>
                
                <div className='anima'>
                  <NavLink to={'/Aboutus'}>
                    About Us
                  </NavLink>
                  <span className='focus-broder'></span>
                </div>
              </>
              :
                ""
            : ""
          }
        </div> 
        <div className='Profile'>
          <div className='profilebox'>
            <span className='profileName'>{user ? user.displayName:''}</span><br/>
            <span className='greeting'>{user ? "Kuzuzangpola!!":''}</span>
          </div>
          <div onClick={dialog}>
            {user ? 
              <div className='profilePic'>
                <span className='PFName'>{user ? user.displayName[0]:''}</span>
              </div>
              :""  
            }
          </div>
          <div className={Dclicked ? 'register' : 'register close'}>

            <div className='registerA'>
              <button className='Rbtn' onClick={logoutOfApp}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div> 
      <div className='menu_icon' onClick={showMenu}>
        {clicked ? <FaTimes />:<FaBars />}
      </div>
    </header>

  )
}

export default Navbar

