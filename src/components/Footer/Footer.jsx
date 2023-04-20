import React from 'react'
import './Footer.css'
import { BsFacebook,BsInstagram } from 'react-icons/Bs'
import { FaTwitter } from 'react-icons/Fa'
import { ImWhatsapp } from 'react-icons/Im'
import { RxLinkedinLogo } from 'react-icons/Rx'

function Footer() {
  return (
    <div class="footer">
        <div class="col1">
            <h3>Gawa Restaurant</h3>
        </div>

        <div class="Ficons">
            <p>Follow Us</p>
            <div className='socialIcon'>
                <a href='https://www.facebook.com/' target='__blank'><BsFacebook className='SIcon' /></a>
                <a href='https://www.instagram.com/' target='__blank'><BsInstagram className='SIcon' /></a>
                <a href='https://twitter.com/?lang=en' target='__blank'><FaTwitter className='SIcon' /></a>
                <a href='https://www.whatsapp.com/' target='__blank'><ImWhatsapp className='SIcon' /></a>
                <a href='https://www.linkedin.com/' target='__blank'><RxLinkedinLogo className='SIcon' /></a>
            </div>
        </div>

        <div class="col2">
            <div className='newsD'>
                <h3>NEWSLETTERS</h3>
                <p>Receive the Latest News and Exclusive Offers </p>
            </div>
            <div class="newsL">
                <input type="text" className='newsLI' placeholder="Email"/>
                <button className='newsLB'>Subscribe</button>
            </div>
        </div>
    </div>

  )
}

export default Footer