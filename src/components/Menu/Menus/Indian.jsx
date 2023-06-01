import {useState} from 'react'
import '../Menu.css';
import {useSelector} from 'react-redux';
import {selectUser } from '../../../features/userSlice';
import { setDoc,collection,doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import pic1 from './img/bchicken.jpg';
import pic2 from './img/biryani.jpg';
import pic3 from './img/chanamasala.jpg';
import pic4 from './img/palakpaneer.jpg';
import pic5 from './img/naan.jpg';

function Indian() {

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
            if (Name==='Butter Chicken' && inputData1 >= 1 && inputData1 <= 10){
                tolPrice=inputData1*price
            }
            else if (Name==='Biryani' && inputData2 >= 1 && inpinputData2utData1 <= 10){
                tolPrice=inputData2*price
            }
            else if (Name==='Chana Masala' && inputData3 >= 1 && inputData3 <= 10){
                tolPrice=inputData3*price
            }
            else if (Name==='Palak Paneer' && inputData4 >= 1 && inputData4 <= 10){
                tolPrice=inputData4*price
            }
            else if (Name==='Naan' && inputData5 >= 1 && inputData5 <= 10){
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
        <div class="menuf"><img src={pic1} class="menuimg"/><h3>Butter Chicken</h3>
                <div class="menutxt">A classic North Indian dish made with succulent pieces of chicken cooked in a creamy tomato-based sauce, infused with aromatic spices and finished with a dollop of butter.<br/>Price: Nu.200</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData1}
                        onChange={(e) => setInputData1(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Butter Chicken','200')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic2} class="menuimg"/><h3>Biryani</h3>
                <div class="menutxt">A fragrant rice dish made with long-grain basmati rice, layered with tender meat or vegetables, and infused with a blend of aromatic spices.<br/>Price: Nu.200</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData2}
                        onChange={(e) => setInputData2(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Biryani','200')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic3} class="menuimg"/><h3>Chana Masala</h3>
                <div class="menutxt">A flavorful vegetarian dish made with chickpeas simmered in a spicy tomato-based sauce, flavored with a blend of aromatic spices.<br/>Price: Nu.150</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData3}
                        onChange={(e) => setInputData3(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Chana Masala','150')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic4} class="menuimg"/><h3>Palak Paneer</h3>
                <div class="menutxt">A delicious vegetarian dish made with cubes of paneer cheese cooked in a creamy spinach-based sauce, enriched with cream and spices.<br/>Price: Nu.160</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData4}
                        onChange={(e) => setInputData4(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Palak Paneer','160')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic5} class="menuimg"/><h3>Naan</h3>
                <div class="menutxt">bread made from a dough of flour, water, and yeast, cooked in a traditional clay oven or tandoor, and served hot and fluffy.<br/>Price: Nu.130</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData5}
                        onChange={(e) => setInputData5(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Naan','130')}>Order</button>
                </div>
            </div>
    </div>
  )
}

export default Indian