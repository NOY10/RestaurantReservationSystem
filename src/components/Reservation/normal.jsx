import pic1 from '../img/res.jpg';
import './normal.css';
import { BsFillClockFill } from 'react-icons/Bs'
import { FaCalendarAlt } from 'react-icons/Fa'


function normal() {
    // let sum = 0
    // const getAll = () => {
    //     for (var i = 0; i < localStorage.length; i++) {

    //         // set iteration key name
    //         var key = localStorage.key(i);
          
    //         // use key name to retrieve the corresponding value
    //         var value = localStorage.getItem(key);
          
    //         // console.log the iteration key and value
    //         // console.log('Key: ' + key + ', Value: ' + value);  
    //         sum=sum+JSON.parse(value)
    //       }
    //     return sum
    // }  
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
                        <p>Mr.Dorji Drukpa</p>
                    </div>
                    <div className="inp">
                        <div className="icons">
                            <input className="inputI" type="date" />
                            <FaCalendarAlt className="icon"/>
                        </div>
                        <div className="icons">
                            <input className="inputI" type="input" placeholder="00:00 AM"/>
                            <BsFillClockFill className="icon"/>
                        </div>
                    </div>
                    <div className="tableC">
                        <div className="table">
                            <select name="cars" id="cars">
                                <option >Choose a Table:</option>
                                <option >Table 1</option>
                                <option >Table 2</option>
                                <option >Table 3</option>
                                <option >Table 4</option>
                                <option >Table 5</option>
                            </select>
                        </div>
                        {/* <div className="fileT">
                            <input type='file' placeholder=''/>
                        </div> */}
                        
                    </div>
                    {/* <div className="orderA" >
                        <p> Total Amount: {getAll()}</p>
                        <a href="./YourMenu">View your orders</a>
                    </div>   */}
                    <div className="inp" >
                        <a href="./YourMenu" className="btnB">BOOK NOW</a>
                    </div>
                </div>
            </form>
            {/* {getAll()} */}
        </div>

    </div>
  )
}

export default normal