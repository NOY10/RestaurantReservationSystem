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
                <BsFacebook className='SIcon'/>
                <BsInstagram className='SIcon'/>
                <FaTwitter className='SIcon'/>
                <ImWhatsapp className='SIcon'/>
                <RxLinkedinLogo className='SIcon'/>
            </div>
        </div>

        <div class="col2">
            <div className='newsD'>
                <h3>NEWSLETTERS</h3>
                <p>Receive the Latest News and Exclusive Offers </p>
            </div>
            <div class="newsL">
                <button className='btn'>Text</button>
                <button className='btn'>Email</button>
            </div>
        </div>
    </div>

  )
}

export default Footer