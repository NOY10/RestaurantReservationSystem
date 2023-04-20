import React from 'react'
import pic5 from '../img/jap.jpg';
import pic6 from '../img/ITL.jpg';
import pic7 from '../img/IND.jpg';
import './SpecialC.css'

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
                <a href="./JapaneseCuisine" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic6} alt="error" />
              <div className="img-content">
                <h3>ITALIAN</h3>
                <a href="./ItalianCuisine" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic7} alt="error" />
              <div className="img-content">
                <h3>INDIAN</h3>
                <a href="./IndianCuisine" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SpecialC