import './Menu.css';
import {db} from '../../config/firebase'
import { updateDoc,doc, deleteField, collection, deleteDoc } from 'firebase/firestore';
import { selectUser } from '../../features/userSlice';
import { useSelector} from 'react-redux';

function Yourorder({key,name,NoofOr,price,tolprice}) {

    const user = useSelector(selectUser);

    const remove = (name) => {
        const docRef = doc(db, 'order', user.email, 'orders', name);
        
        deleteDoc(docRef).then(() => {
          alert("Your order is successfully removed");
        }).catch((error) => {
          console.error("Error deleting document: ", error);
        });
      };

  return (
    <div key={key}>
        <div className="YMe">
            <p className='p1'>{name}</p>
            <p className='p2'>{NoofOr ?NoofOr:""}</p>
            <p className='p3'>{price}</p>
            <p className='p4'>{tolprice}</p>
            <button onClick={()=>remove(name)} className="YMeB">DELETE</button>
        </div>
    </div>
  )
}

export default Yourorder