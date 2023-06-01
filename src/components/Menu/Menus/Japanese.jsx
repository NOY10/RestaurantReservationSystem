import {useState} from 'react'
import '../Menu.css';
import {useSelector} from 'react-redux';
import {selectUser } from '../../../features/userSlice';
import { setDoc,collection,doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import pic1 from './img/sushi.jpg';
import pic2 from './img/tempurasoba.jpg';
import pic3 from './img/ramen.jpg';
import pic4 from './img/sashimi.jpg';
import pic5 from './img/katsudon.jpg';

function Japanese() {
  
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
            if (Name==='Sushi' && inputData1 >= 1 && inputData1 <= 10){
                tolPrice=inputData1*price
            }
            else if (Name==='Tempura Soba' && inputData2 >= 1 && inputData2 <= 10){
                tolPrice=inputData2*price
            }
            else if (Name==='Tonkotsu Ramen' && inputData3 >= 1 && inputData3 <= 10){
                tolPrice=inputData3*price
            }
            else if (Name==='Sashimi' && inputData4 >= 1 && inputData4 <= 10){
                tolPrice=inputData4*price
            }
            else if (Name==='Katsudon' && inputData5 >= 1 && inputData5 <= 10){
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
        <div class="menuf"><img src={pic1} class="menuimg"/><h3>Sushi</h3>
                <div class="menutxt">dish made with vinegared rice and a variety of ingredients such as fish, seafood, vegetables, and condiments.<br/>Price: Nu.200</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData1}
                        onChange={(e) => setInputData1(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Sushi','200')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic2} class="menuimg"/><h3>Tempura Soba</h3>
                <div class="menutxt">Crispy battered shrimp and vegetables served with hot soba noodles and savory dipping sauce.<br/>Price: Nu.200</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData2}
                        onChange={(e) => setInputData2(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Tempura Soba','200')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic3} class="menuimg"/><h3>Tonkotsu Ramen</h3>
                <div class="menutxt">Rich and savory pork broth served with thin noodles, tender slices of pork, bamboo shoots, nori, and a boiled egg.<br/>Price: Nu.170</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData3}
                        onChange={(e) => setInputData3(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Tonkotsu Ramen','170')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic4} class="menuimg"/><h3>Sashimi</h3>
                <div class="menutxt">Fresh, raw slices of premium-grade seafood, including tuna, salmon, yellowtail, and whitefish. Served with wasabi, soy sauce, and pickled ginger.<br/>Price: Nu.130</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData4}
                        onChange={(e) => setInputData4(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Sashimi','130')}>Order</button>
                </div>
            </div> 
            <div class="menuf"><img src={pic5} class="menuimg"/><h3>Katsudon</h3>
                <div class="menutxt">Crispy fried pork cutlet and caramelized onions simmered in a sweet and savory broth made with soy sauce, mirin, and dashi, served over a bed of steaming hot rice and topped with a beaten egg.<br/>Price: Nu.195</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData5}
                        onChange={(e) => setInputData5(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Katsudon','195')}>Order</button>
                </div>
        </div>
    </div>
  )
}

export default Japanese