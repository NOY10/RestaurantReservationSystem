import pic1 from '../img/res.jpg';
import './normal.css'
import Table from './Table';
import Booking from './Booking';


function normal() {
  return (
    <>
        <div className="normal">
            <div className="left">
                <div className="tit">
                    <h2> Reservation</h2>
                    <p className="medP">Make a Romantic Atmosphere Here</p>
                    <p>Make online reservation, read restauran reviews from diners, 
                        and earn points towards free meals.<br/> Grab you seat now
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={pic1} className="resPic"/>
                <div>
                   <Booking />
                </div>
            </div>
        </div>
    
        <Table />

        
    </>
    
  )
}

export default normal