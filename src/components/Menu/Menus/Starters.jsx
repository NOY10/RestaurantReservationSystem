import {useState,useEffect} from 'react'
import '../Menu.css';
import {useSelector} from 'react-redux';
import {selectUser } from '../../../features/userSlice';
import { setDoc,collection,doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import pic1 from './img/fries.jpg';
import pic2 from './img/fishfin.jpg';
import pic3 from './img/onionring.png';
import pic4 from './img/samosa.jpg';
import pic5 from './img/ccp.jpg';

function Starters() {
    
    const user = useSelector(selectUser);
    
    const [inputData1, setInputData1] = useState('');
    const [inputData2, setInputData2] = useState('');
    const [inputData3, setInputData3] = useState('');
    const [inputData4, setInputData4] = useState('');
    const [inputData5, setInputData5] = useState('');

    let tolPrice=0
    let flag=true;
    const order = async(Name,price) =>{
        if(inputData1!=="" || inputData2!=="" || inputData3!=="" || inputData4!=="" || inputData5!==""){
            if (Name==='French Fries' && inputData1 >= 1 && inputData1 <= 10){
                tolPrice=inputData1*price
            }
            else if (Name==='Fish Fingers' && inputData2 >= 1 && inputData2 <= 10){
                tolPrice=inputData2*price
            }
            else if (Name==='Onion Rings' && inputData3 >= 1 && inputData3 <= 10){
                tolPrice=inputData3*price
            }
            else if (Name==='Samosa' && inputData4 >= 1 && inputData4 <= 10){
                tolPrice=inputData4*price
            }
            else if (Name==='Crispy Chilli Potato' && inputData5 >= 1 && inputData5 <= 10){
                tolPrice=inputData5*price
            }
            else{
                alert("Please Enter number between 1-10")
                flag=false;
            }

            const entityDocRef = doc(db, 'order', user.email);
            const entityData = {
                name:user.displayName,
                email:user.email,
            };
            await setDoc(entityDocRef, entityData);
            const fieldsCollectionRef = collection(entityDocRef, 'orders');

            if(tolPrice!==0){
                const field1Data = {
                    name:user.displayName,
                    email:user.email,
                    dishName:Name,
                    Dprice: price,
                    tolPrice
                };
                const customOrderDocRef = doc(fieldsCollectionRef, Name);
                await setDoc(customOrderDocRef, field1Data);
            }
            flag?alert("Thank You for your order!"):""
        } else{
            alert("Empty field")
        }
        setInputData1("");
        setInputData2("");
        setInputData3("");
        setInputData4("");
        setInputData5("");
      };
  return (
    <div>
        <p id="starters">
            <div class="menuf"><img src={pic1} class="menuimg"/><h3>French Fries</h3>
                <div class="menutxt">Golden, crispy hand-cut potatoes, lightly seasoned and fried to crispy perfection, served hot and salted for a classic and satisfying side dish.<br/>Price: Nu.100</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData1}
                        onChange={(e) => setInputData1(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('French Fries','100')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic2} class="menuimg"/><h3>Fish Fingers</h3>
                <div class="menutxt">Crispy and delicious fish fingers made from premium fish fillets, coated in breadcrumbs and served hot with a side of tartar sauce.<br/>Price: Nu.150</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData2}
                        onChange={(e) => setInputData2(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Fish Fingers','150')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic3} class="menuimg"/><h3>Onion Rings</h3>
                <div class="menutxt">Crispy, deep-fried rings of sweet onion, served hot and golden-brown for the perfect snack.<br/>Price: Nu.90</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData3}
                        onChange={(e) => setInputData3(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Onion Rings','90')}>Order</button>
                </div>
            </div>
           
            <div class="menuf"><img src={pic4} class="menuimg"/><h3>Samosa</h3>
                <div class="menutxt"> A savory and crispy triangular pastry filled with spiced vegetables or meat, served hot and fresh.<br/>Price: Nu.95</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData4}
                        onChange={(e) => setInputData4(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Samosa','95')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic5} class="menuimg"/><h3>Crispy Chilli Potato</h3>
                <div class="menutxt">Thinly sliced and crispy fried potatoes tossed in a sweet and spicy chili sauce, served hot and garnished with fresh herbs for a flavorful and crunchy.<br/>Price: Nu.80</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData5}
                        onChange={(e) => setInputData5(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Crispy Chilli Potato','80')}>Order</button>
                </div>
            </div>
        </p>
    </div>
  )
}

export default Starters