import React from 'react'
import './Homepage.css';
import ContactUs from '../ContactUs/ContactUs';
import SpecialC from './SpecialC';
import Food from './Food';
import Map from './Map'


function Homepage() {
  return (
    <div className="homepage">
      <section className="showcase-area">
        <div className="showcase-container">
            <h1 className="main-title">Gawa Restaurant</h1>
            <p>Eat Healthy, Live Healthy</p>
        </div>
      </section>
      
      <Food/>
      <SpecialC />
      <ContactUs />
      <Map />
      
    </div>
  )
}

export default Homepage