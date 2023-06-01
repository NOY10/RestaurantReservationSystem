import './Menu.css';
import {useState, useEffect} from 'react'
import YourTable from './YourTable';
import {db} from '../../config/firebase'
import { collection, doc, getDocs, onSnapshot, setDoc  } from 'firebase/firestore';
import { selectUser } from '../../features/userSlice';
import { useSelector} from 'react-redux';
import Yourorder from './Yourorder';

function YMenu() {
  const [booking,setBooking] = useState([]);
  const [order,setOrder] = useState([]);
  const user = useSelector(selectUser);
  
  //For booking
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
  // For order
  useEffect(() => {
    const unsubscribe = onSnapshot(collection( doc(db, 'order', user.email), 'orders'), (snapshot) => {
      try {
        const orderData = snapshot.docs.map((doc) => doc.data());
        setOrder(orderData);
      } catch (error) {
        console.error(error);
      }
    });
  
    return () => {
      // Unsubscribe from the real-time updates when the component unmounts or the dependency array changes
      unsubscribe();
    };
  }, []);

  let sum=0;
  order?.map((order) =>(
    sum=sum+order.tolPrice
  ))
  return (
    <div className="YMenu">
      <div className="ptM">
        <p className='pt1'>Your order</p>
        <p className='pt2'>No of <br/>order</p>
        <p className='pt3'>Price</p>
        <p className='pt4'>Total</p>
        <p className="pt5">Delete</p>
      </div>
      {
        order?.map((order) =>(
          <>
            <Yourorder 
              key={order.dishName}
              name={order.dishName}
              NoofOr={order.tolPrice/order.Dprice}
              price={order.Dprice}
              tolprice={order.tolPrice}
            />
          </>
        ))
      }
      <div className="YMe">
        <p className='p1'>Total Amount:</p>
        <p className='p2'>{sum}</p>
      </div>
      {booking?.map((tableno)=>( //{name,TableNo,Date,Time}
        <>
          {
            tableno.name==user.displayName?
            <div className="room2">
              <YourTable 
              key={tableno.TableNo} 
              name={tableno.name} 
              tableno={tableno.TableNo}
              date={tableno.date}
              time={tableno.time}
            />
            </div>
              : ""
          }
        </>
      ))}
    </div>
  )
}

export default YMenu