import {useState,useEffect} from 'react'
import '../Menu.css';
import pic1 from './img/sushi.jpg';
import pic2 from './img/tempurasoba.jpg';
import pic3 from './img/ramen.jpg';
import pic4 from './img/sashimi.jpg';
import pic5 from './img/katsudon.jpg';

function Japanese() {
    const [clicked,setClicked] = useState(false);
    const [Name, setNames] = useState([]);
    const [price, setPrice] = useState([]);
    const [inputData1, setInputData1] = useState('');
    const [inputData2, setInputData2] = useState('');
    const [inputData3, setInputData3] = useState('');
    const [inputData4, setInputData4] = useState('');
    const [inputData5, setInputData5] = useState('');

    let tolPrice=0

    if (Name==='Sushi'){
        tolPrice=inputData1*price
    }
    else if (Name==='Tempura Soba'){
        tolPrice=inputData2*price
    }
    else if (Name==='Tonkotsu Ramen'){
        tolPrice=inputData3*price
    }
    else if (Name==='Sashimi'){
        tolPrice=inputData4*price
    }
    else if (Name==='Katsudon'){
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