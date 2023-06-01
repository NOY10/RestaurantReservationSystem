import React, { useState } from 'react'
import './ContactUs.css'
import { TiLocation } from 'react-icons/Ti'
import { BsTelephoneFill } from 'react-icons/Bs'
import { CiMail } from 'react-icons/Ci'
import { db } from '../../config/firebase';
import { collection, addDoc  } from 'firebase/firestore';


function ContactUs() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const Send = async(e) => {
    
    e.preventDefault();
    if(name===''&&email===''&&message===''){
      setSend("Please fill in all required fields");
    }else{
      try {
        await addDoc(collection(db, 'contacts'), {
          name: name,
          email: email,
          message: message
        });
        alert("Message Send")
      } catch (error) {
        console.error('Error adding document: ', error);
      }
      setName('');
      setEmail('');
      setMessage('');
    }
   
};
  return (
    <div className="contactUs">
      <div className="conInfo">
        <h2 style={{fontSize:'40px',color:'white'}}>Contact Us</h2>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
              <span className='focus-broder'></span>
            </div>
            <div className='anime'>
              <input 
                type="email" 
                placeholder="Email" 
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <span className='focus-broder'></span>
            </div>
            <div className='anime'>
              <textarea 
                type='text' 
                placeholder='Message' 
                className='form-input' 
                style={{height:'100px'}} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
              <span className='focus-broder'></span>
          </div>
          <div className='message_button'>
            <button className="submit-button" onClick={Send}>Submit</button>
          </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  
  )
}

export default ContactUs