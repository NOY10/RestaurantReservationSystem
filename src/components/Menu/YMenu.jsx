import './Menu.css';
import {useState, useEffect} from 'react'

function YMenu() {
  
  const [inputData1, setInputData1] = useState('');
  const [clicked,setClicked] = useState(false);

    let  sum = 0;
    const getAll = () => {
      let orders = []
        for (var i = 0; i < localStorage.length; i++) {

            // set iteration key name
            var key = localStorage.key(i);
          
            // use key name to retrieve the corresponding value
            var value = localStorage.getItem(key);
          
            // console.log the iteration key and value
            // console.log('Key: ' + key + ', Value: ' + value); 
            sum = sum + JSON.parse(value);
            if(JSON.parse(value)!=0){
              orders.push([key, JSON.parse(value)]) 
            }
            
        
          }
        return orders
    }
    const remove = () => {
      setClicked(!clicked)
    }

    useEffect(() => {
      localStorage.removeItem(inputData1);
   }, [clicked]);

   const items = getAll(); // assume items is an array of objects

    const listItems = items.map((item) =>
    <div className="YMe">
      <p>{item[0]}</p>
      <p>{item[1]}</p>
    </div>
      
    ); 
  return (
    <div className="YMenu">
      <div className="YMe">
        <p>Your Order</p>
        <p>Amount</p>
      </div>
      {listItems}
      <div className="YMe">
        <p>Total Amount</p>
        <p>{sum}</p>
      </div>
      <div className="YMe">
        <input 
          type='text' 
          className="YMeI"
          value={inputData1}
          onChange={(e) => setInputData1(e.target.value)}
        />
        <button onClick={() =>remove()} className="YMeB">DELETE</button>
      </div>

      <div className="YourT">
        <h3>Your Table</h3>
        <div  className="Tinfo">
          <div className="TValue">
            <label>Name:</label>
            <p>Mr Dorji Drukpa</p>
          </div>
          <div className="TValue">
            <label>Name:</label>
            <input type="file" className=""/>
          </div>
          <div className="TValue">
            <p>Table No: 1</p>
          </div>
          <div className="TValue">
            <p>Date:21/04/2023</p>
          </div>
          <div className="TValue">
            <p>Time: 7.00 pm</p>
          </div>
          <div className="TValue">
            <button type="button" className="TBtn">Cancel Reservation</button>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default YMenu