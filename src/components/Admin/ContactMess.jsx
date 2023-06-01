import React, { useState,useEffect } from 'react';
import './ContactMess.css'
import {db} from '../../config/firebase'
import { collection, onSnapshot  } from 'firebase/firestore';
import Messages from './Messages';

function ContactMess() {
  const [Message,setMessage] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), (snapshot) => {
      try {
        const bookingData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessage(bookingData);
        console.log(Message)
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
    <div className="Mess">
      <h3>Customer Message</h3>
      {Message?.map((Mess)=>(
        <Messages id={Mess.id} name={Mess.name} email={Mess.email} message={Mess.message}/>
      ))}

    </div>
  )
}

export default ContactMess