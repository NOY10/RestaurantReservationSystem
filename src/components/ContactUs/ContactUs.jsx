import React from 'react'
import './ContactUs.css'
import { TiLocation } from 'react-icons/Ti'
import { BsTelephoneFill } from 'react-icons/Bs'
import { CiMail } from 'react-icons/Ci'


function ContactUs() {
  return (
    <div className="contactUs">
      <div className="conInfo">
        <h2 style={{fontSize:'40px',color:'white'}}>Contact Us</h2>
        {/* <p>Helco</p> */}
      </div>
      
      <div className='contactI'>
        <div className="contact-container">
          <div className="contact-info">
            <div className="infomation">
              <TiLocation className='infoIcon'/>
              <div className='infoAdd'>
                <p>Address</p>
                <p>
                  43234 Babesa Road,<br/>
                  Thimphu,Bhutan
                </p>
              </div>
            </div>
            <div className="infomation">
              <BsTelephoneFill className='infoIcon'/>
              <div className='infoAdd'>
                <p>Phone</p>
                <p>+197-17679384</p>
                <p>+197-77083423</p>
              </div>
            </div>
            <div className="infomation">
              <CiMail className='infoIcon'/>
              <div className='infoAdd'>
                <p>Email</p>
                <p>gawaRestaurant2021@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form>
              <div className='anime'>
              <input 
                type='text' 
                placeholder='Your Name' 
                className='form-input'
                />
              <span className='focus-broder'></span>
            </div>
            <div className='anime'>
              <input 
                type="email" 
                placeholder="Email" 
                className="form-input"
                />
              <span className='focus-broder'></span>
            </div>
            <div className='anime'>
              <textarea 
                type='text' 
                placeholder='Message' 
                className='form-input' 
                style={{height:'100px'}} 
                />
              <span className='focus-broder'></span>
          </div>
          <div className='message_button'>
            <button className="submit-button" type='submit'>Submit</button>
          </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  
  )
}

export default ContactUs