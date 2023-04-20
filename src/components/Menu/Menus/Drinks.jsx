import {useState,useEffect} from 'react'
import '../Menu.css';
import pic1 from './img/lassi.jpg';
import pic2 from './img/strawberrysmo.jpg';
import pic3 from './img/matchalatte.jpg';
import pic4 from './img/hotchocolate.jpg';
import pic5 from './img/americano.jpg';

function Drinks() {
    const [clicked,setClicked] = useState(false);
    const [Name, setNames] = useState([]);
    const [price, setPrice] = useState([]);
    const [inputData1, setInputData1] = useState('');
    const [inputData2, setInputData2] = useState('');
    const [inputData3, setInputData3] = useState('');
    const [inputData4, setInputData4] = useState('');
    const [inputData5, setInputData5] = useState('');

    let tolPrice=0

    if (Name==='Lassi'){
        tolPrice=inputData1*price
    }
    else if (Name==='Strawberry Smoothie'){
        tolPrice=inputData2*price
    }
    else if (Name==='Iced-Matcha Latte'){
        tolPrice=inputData3*price
    }
    else if (Name==='Hot Chocolate'){
        tolPrice=inputData4*price
    }
    else if (Name==='Americano'){
        tolPrice=inputData5*price
    }

    
    function order(Name,price) {
        setNames(Name);
        setPrice(price);
        setClicked(!clicked)
    }
    useEffect(() => {
        localStorage.setItem(`${Name}`, JSON.stringify(tolPrice));
    }, [clicked]);
  return (
    <div>
        <div class="menuf"><img src={pic1} class="menuimg"/><h3>Lassi</h3>
                <div class="menutxt">made with fresh, creamy yogurt that's blended with ice, water, and sugar, and then flavored with cardamom, saffron, and other aromatic spices.<br/>Price: Nu.70</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData1}
                        onChange={(e) => setInputData1(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Lassi','70')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic2} class="menuimg"/><h3>Strawberry Smoothie</h3>
                <div class="menutxt">Fresh strawberries blended with creamy yogurt, milk or non-dairy milk, and a touch of honey or maple syrup for sweetness.<br/>Price: Nu.80</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData2}
                        onChange={(e) => setInputData2(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Strawberry Smoothie','80')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic3} class="menuimg"/><h3>Iced-Matcha Latte</h3>
                <div class="menutxt">A refreshing and energizing Japanese-inspired drink made with matcha powder, milk or a non-dairy milk alternative, and sweetened with honey or agave syrup.<br/>Price: Nu.80</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData3}
                        onChange={(e) => setInputData3(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Iced-Matcha Latte','80')}>Order</button>
                </div>
            </div>
            <div class="menuf"><img src={pic4} class="menuimg"/><h3>Hot Chocolate</h3>
                <div class="menutxt">A rich and indulgent winter beverage made with melted chocolate or cocoa powder, milk, and a touch of vanilla extract for added flavor.<br/>Price: Nu.95</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData4}
                        onChange={(e) => setInputData4(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Hot Chocolate','95')}>Order</button>
                </div>
            </div> 
            <div class="menuf"><img src={pic5} class="menuimg"/><h3>Americano</h3>
                <div class="menutxt">A classic coffee beverage made by adding hot water to a shot of espresso, resulting in a bold and intense flavor.<br/>Price: Nu.85</div>
                <div className="orderS">
                    <p className="orderP">Number of orders:</p>
                    <input 
                        type='text' 
                        className="orderI"
                        value={inputData5}
                        onChange={(e) => setInputData5(e.target.value)}
                    />
                    <button className="Menubtn" onClick={() =>order('Americano','85')}>Order</button>
                </div>
        </div>
    </div>
  )
}

export default Drinks