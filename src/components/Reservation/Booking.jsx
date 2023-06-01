import './normal.css'
import {useSelector} from 'react-redux';
import {selectUser } from '../../features/userSlice';
import { BsFillClockFill } from 'react-icons/Bs'
import { FaCalendarAlt } from 'react-icons/Fa'
import { MdFileUpload} from 'react-icons/Md';
import { useState,useEffect } from 'react';
import { db } from '../../config/firebase';
import { setDoc,collection,getDocs,doc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
function Booking() {
  const user = useSelector(selectUser);
    
  const [tablenno,setTableno] = useState([]);
    // for firebase
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [tableNo,setTableNo] = useState('');
  useEffect(()=>{
    const getTables = async() => {
      const querySnapshot = await getDocs(collection(db, "booking"));
      try {
        const filteredData = querySnapshot.docs.map((doc)=>(
            doc.data().refTableNo
        ));
        setTableno(filteredData)
      }catch(e) {
        console.error(e)
      }
    }
    getTables()
    console.log(12345)
  },[])
  
  const Booking = async(e) =>{
    e.preventDefault();
    if (tableNo>8 || tableNo<0){
        alert("Please select table number from 1 to 8")
    }
    else if (date=='' || time=='' || tableNo==''){
        alert("Please fill in all required fields")
    }
    else if(tablenno.includes(tableNo)){
        alert("Table aready booked")
    }
    else{
        await setDoc(doc(db, "booking",`Table${tableNo}`),{
            name:user.displayName,
            email:user.email,
            date:date,
            time:time,
            TableNo:tableNo,
            refTableNo:tableNo
        });
        setDate("");
        setTime("");
        setTableNo("");
        alert("Thank You for Using our service")
    }
    
  };

    const handleTimeChange = (e) => {
        const time=e.target.value;
        const hours = parseInt(time.slice(0, 2));
        const minutes = time.slice(3, 5);
    
        // Determine AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
    
        // Convert hours to 12-hour format
        const twelveHourTime = `${(hours % 12) || 12}:${minutes} ${amOrPm}`;

        setTime(twelveHourTime);
    };
  return (
    <div className="Fouter">
        <div className="inp">
            <div className="bod">
                <p>{user.displayName}</p>
            </div>
        </div>
        <div className="inp">
            <div className="icons">
                <input 
                    className="inputI" 
                    type="date" 
                    value={date} 
                    onChange={e => setDate(e.target.value)}
                />
                <FaCalendarAlt className="icon"/>
            </div>
            <div className="icons">
                <input 
                    className="inputI" 
                    type="time"
                    onChange={handleTimeChange}
                />
                <BsFillClockFill className="icon"/>
            </div>
        </div>
        <div className="inp">
            <div className="TABNO">
                <input 
                    className="inputI" 
                    placeholder="Table No"
                    type="number"
                    min="1" max="8"
                    value={tableNo} 
                    onChange={e => setTableNo(e.target.value)}
                />
            </div>
            <div className="TABNO2">
                <label htmlFor="formId" className='updiv'>
                    <p>PAY</p>
                    <input name="" type="file" id="formId" hidden />
                    <MdFileUpload className='upload'/>
                    
                </label>
            </div>
        </div>
        <div className="intBtn" >
            <button className="intB" onClick={Booking}>BOOK NOW</button>
            <NavLink className="intB" to={'/YourMenu'} >
                YOUR TABLE
            </NavLink>
        </div>
    </div>
  )
}

export default Booking