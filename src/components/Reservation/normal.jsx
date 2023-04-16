import React from 'react'
import pic1 from '../img/res.jpg';
import './normal.css';
import { BsFillClockFill } from 'react-icons/Bs'
import { FaCalendarAlt } from 'react-icons/Fa'


function normal() {
  return (
    <div className="normal">
        <div className="left">
            <div className="tit">
            <h2> Reservation</h2>
            <p style={{fontSize:'40px'}}>Make a Romantic Atmosphere Here</p>
            <p>Make online reservation, read restauran reviews from diners, 
                and earn points towards free meals.<br/> Grab you seat now
            </p>
            </div>
        </div>
        <div className="right">
            <img src={pic1} className="resPic"/>
            <form>
                <div className="Fouter">
                    <div className="inp" id="bod">
                        <p>Mr.Lobzang Yonten</p>
                    </div>
                    <div className="inp">
                        <div className="icons">
                            <input className="inputI" type="date" />
                            <FaCalendarAlt className="icon"/>
                        </div>
                        <div className="icons">
                            <input className="inputI" type="time" />
                            <BsFillClockFill className="icon"/>
                        </div>
                    </div>  
                    <div className="inp" >
                        <button id="btnB">BooK Now</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
  )
}

export default normal