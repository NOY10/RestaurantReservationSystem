import React from 'react'
import './ContactMess.css'
import {db} from '../../config/firebase'
import { doc, deleteDoc } from 'firebase/firestore';

function Messages({id,name,email,message}) {
    console.log(id)
    const remove = (id) => {
        const docRef = doc(db, 'contacts', id);
        
        deleteDoc(docRef).then(() => {
          alert("Message is successfully removed");
        }).catch((error) => {
          console.error("Error deleting document: ", error);
        });
      };
  return (
    <div key={id} className='MessOut'>
        <div className="Messdiv">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
            <button className='Messbtn' onClick={() => remove(id)}>Delete</button>
        </div>
    </div>
  )
}

export default Messages