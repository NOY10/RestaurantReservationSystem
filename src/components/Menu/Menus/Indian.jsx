import {useState,useEffect} from 'react'
import '../Menu.css';
import pic1 from './img/bchicken.jpg';
import pic2 from './img/biryani.jpg';
import pic3 from './img/chanamasala.jpg';
import pic4 from './img/palakpaneer.jpg';
import pic5 from './img/naan.jpg';

function Indian() {
    const [clicked,setClicked] = useState(false);
    const [Name, setNames] = useState([]);
    const [price, setPrice] = useState([]);
    const [inputData1, setInputData1] = useState('');
    const [inputData2, setInputData2] = useState('');
    const [inputData3, setInputData3] = useState('');
    const [inputData4, setInputData4] = useState('');
    const [inputData5, setInputData5] = useState('');

    let tolPrice=0

    if (Name==='Butter Chicken'){
        tolPrice=inputData1*price
    }
    else if (Name==='Biryani'){
        tolPrice=inputData2*price
    }
    else if (Name==='Chana Masala'){
        tolPrice=inputData3*price
    }
    else if (Name==='Palak Paneer'){
        tolPrice=inputData4*price
    }
    else if (Name==='Naan'){
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