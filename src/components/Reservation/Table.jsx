import {useState,useEffect} from 'react'
import Tables4 from "./Tables/Tables4"
import './Table.css';
import {db} from '../../config/firebase'
import { collection, onSnapshot  } from 'firebase/firestore';
import img from './taA.png'

function Table() {
  const [booking,setBooking] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "booking"), (snapshot) => {
      try {
        const bookingData = snapshot.docs.map((doc) => doc.data());
        setBooking(bookingData);
      } catch (error) {
        console.error(error);
      }
    });
  
    return () => {
      // Unsubscribe from the real-time updates when the component unmounts or the dependency array changes
      unsubscribe();
    };
  }, []);
  
  return (
    <section className="table">
      <img className="imgRoom" src={img}/>
      <div className="tabCha">
        {booking?.map((tableno)=>(
          <div className="room2">
            <Tables4 key={tableno.TableNo} tableno={tableno.TableNo} name={tableno.name}/>
          </div>
          ))}
      </div>
    </section>
  )
}

export default Table