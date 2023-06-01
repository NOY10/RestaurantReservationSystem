import './Dashboard.css';
import Userinfo from './Userinfo';
import {useState, useEffect} from 'react'
import {db} from '../../config/firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { selectUser } from '../../features/userSlice';
import { useSelector} from 'react-redux';
import Userbill from './Userbill'
import { NavLink } from 'react-router-dom';

function Dashboard() {
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
        const unsubscribe = onSnapshot(collection(doc(db, 'order', user.email), 'orders'), (snapshot) => {
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
    <div className="Dash">
        <nav>
            <h1 style={{float:"right", marginRight:"100px", color:"black"}}>Welcome Admin</h1>
        </nav>
        <table class="tableD">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Table No</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
        </table> 
        {booking?.map((tableno)=>( //{name,TableNo,Date,Time}
            <Userinfo 
                key={tableno.TableNo} 
                name={tableno.name} 
                tableno={tableno.TableNo}
                date={tableno.date}
                time={tableno.time}
                email={tableno.email}
            />
        ))} 

        {order?.map((order) =>(
          <>
            <Userbill 
              key={order.dishName}
              name={order.dishName}
              NoofOr={order.tolPrice/order.Dprice}
              price={order.Dprice}
              tolprice={order.tolPrice}
            />
          </>
        ))
      }
      <div className="Mbtn">
        <NavLink to={'/Message'}>Message</NavLink>
      </div>
    </div>
  )
}

export default Dashboard