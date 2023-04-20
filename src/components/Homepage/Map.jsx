import React from 'react'
import './Map.css'

function Map() {
  return (
    <section className="map-area">
        <div className="map-container">
          <h2 style={{color: 'white'}}>Find Us Here!</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6775697577914!2d89.3914174751614!3d26.850205776684536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb2c210e611d%3A0x44c5cb2cd32b18d4!2sCollege%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbt!4v1681723980606!5m2!1sen!2sbt" 
          width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Map