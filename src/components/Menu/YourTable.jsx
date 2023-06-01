import './Menu.css';
import {db} from '../../config/firebase'
import { updateDoc,doc, deleteField } from 'firebase/firestore';

function YourTable({key,name,tableno,date,time}) {
  
  const remove = (tableno) => {
    const docRef = doc(db, "booking", `Table${tableno}`);
    const data = {
      date: deleteField(),
      email: deleteField(),
      name: deleteField(),
      time: deleteField(),
      refTableNo: deleteField()
    };
    updateDoc(docRef, data).then(() => {
      alert("Your Table is successfully deleted");
    });
  };

  return (
    <div className="YourT">
        <h3>Your Table</h3>
        <div key={key} className="Tinfo">
          <div className="TValue">
            <p>Name: {name? `${name}`:""}</p>
          </div>
          <div className="TValue">
            <p>Table No: {tableno}</p>
          </div>
          <div className="TValue">
            <p>Date: {date}</p>
          </div>
          <div className="TValue">
            <p>Time: {time}</p>
          </div>
          <div className="TValue">
            <button onClick={()=>remove(tableno)} className="TBtn">Cancel Reservation</button>
          </div>
        </div>
    </div>
  )
}

export default YourTable