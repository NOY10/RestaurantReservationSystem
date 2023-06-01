import {useState, useEffect} from 'react'
import "./Dashboard.css"
import {db} from '../../config/firebase'
import { updateDoc,doc, deleteField,onSnapshot,collection, deleteDoc, getDocs  } from 'firebase/firestore';
import "./Userinfo.css"
import Userbill from './Userbill'

function Userinfo({key,name,tableno,date,time,email}) {

    const [order,setOrder] = useState([]);
    const [clicked,setClicked] = useState(true);
      
    const orderList = (email) => {
        setClicked(!clicked)
        const unsubscribe = onSnapshot(collection( doc(db, 'order',email), 'orders'), (snapshot) => {
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
        
    };
    const remove = async(tableno,email) => {
        const docRef = doc(db, "booking", `Table${tableno}`);
        const data = {
        date: deleteField(),
        email: deleteField(),
        name: deleteField(),
        time: deleteField(),
        refTableNo: deleteField()
        };
        
        
        const ordersCollectionRef = collection(db, 'order', email, 'orders');
        const ordersQuerySnapshot = await getDocs(ordersCollectionRef);
        
        ordersQuerySnapshot.forEach((docs) => {
            const orderDocRef = doc(db, 'order', email, 'orders', docs.id);
            deleteDoc(orderDocRef);
        });
          
        
        const orderD = doc(db, 'order', email);
        console.log(email)
        deleteDoc(orderD).then(() => {
            alert("order is successfully removed");
        }).catch((error) => {
            console.error("Error deleting document: ", error);
        });
        updateDoc(docRef, data).then(() => {
            alert("Table is successfully deleted");
        });
      };

    let sum=0;
    order?.map((order) =>(
        sum=sum+order.tolPrice
    ))
  return (
    <div key={key}>
      <table className={name ? 'tableD' : ''}>
            <tbody>
                <tr>
                    { name?
                    <>
                        <td >{name}</td>
                        <td >{date}</td>
                        <td >{time}</td>
                        <td >{tableno}</td>
                        <td>{email}</td>
                        <td ><button onClick={()=>remove(tableno,email)} className="btnD btn__active">DELETE</button></td>  
                        <td ><button onClick={()=>orderList(email)} className="ordBut">{clicked?"Order List":"Close"}</button></td>  
                    </>:""
                    }
                </tr>
            </tbody>
        </table>
        { 
            !clicked ?
            <div className="userinfo">
                <div className="UptM">
                    <p className='Upt1'>Order</p>
                    <p className='Upt2'>No of order</p>
                    <p className='Upt3'>Price</p>
                    <p className='Upt4'>Total</p>
                </div>
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
                <div className="UMe">
                    <p className='Up1'>Total Amount:</p>
                    <p className='Up2'>{sum}</p>
                </div>
            </div>:""
        }  
        
    </div>
  )
}

export default Userinfo