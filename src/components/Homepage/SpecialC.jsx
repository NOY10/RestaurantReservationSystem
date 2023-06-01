import React from 'react'
import pic5 from '../img/jap.jpg';
import pic6 from '../img/ITL.jpg';
import pic7 from '../img/IND.jpg';
import './SpecialC.css'
import { NavLink } from 'react-router-dom';

function SpecialC() {
  return (
    <div className="food">
        <h2><font color="white">Special Cuisines</font></h2>
        <div className="food-container">
          <div className="food-type">
            <div className="img-container">
              <img src={pic5} alt="error" />
              <div className="img-content">
                <h3>JAPANESE</h3>
                <NavLink to={'/JapaneseCuisine'} className="btn">
                  Go to Menu
                </NavLink>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic6} alt="error" />
              <div className="img-content">
                <h3>ITALIAN</h3>
                <NavLink to={'/ItalianCuisine'} className="btn">
                  Go to Menu
                </NavLink>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic7} alt="error" />
              <div className="img-content">
                <h3>INDIAN</h3>
                <NavLink to={'/IndianCuisine'} className="btn">
                  Go to Menu
                </NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SpecialC