import React from 'react'
import './Homepage.css';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/jap.jpg';
import pic6 from '../img/ITL.jpg';
import pic7 from '../img/IND.jpg';

function Homepage() {
  return (
    <div className="homepage">
      <section className="showcase-area" id="showcase">
      <div className="showcase-container">
          <h1 className="main-title" id="home"><font color="white">Gawa Restaurant</font></h1>
          <p><font color="white">Eat Healthy, Live Healthy</font></p>
      </div>
    </section>
    <div className="banner">
        <div className="center1">
            <img src = {pic1} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center2">
            <h3><font color="#a8b4b9">TRADITION</font><br/><br/>
                Enjoy to your heart's content with traditional cuisine straight from the himalayas.
                We pride ourselves on serving the most authentic and delicious Bhutanese cuisine, using only the freshest and highest quality ingredients.
            </h3>
        </div>
        <div className="center3">
           <img src={pic2}  width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center4">
            <h3><font color="#a8b4b9">AMBIANCE</font><br/><br/>
                The atmosphere within a room can be the determining factor in a guest's overall experience. 
                We have taken great care to select a range of ambiance options that will enhance our guests' stay. Discover the impact of ambiance by utilizing our room reservation system today!</h3>
        </div>
        <div className="center5">
            <img src ={pic3} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center6">
            <h3><font color="#a8b4b9">SPECIALS</font><br/><br/>
                There are also provisions for international cuisines!<br/>
                We offer a vast selection of international cuisines, from Italian classics like pizza and pasta, to spicy Indian curries and savory Japanese ramen.</h3>
        </div>
        <div className="center7">
            <img src={pic4} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center8">
            <h3><font color="#a8b4b9">QUALITY SERVICE</font><br/><br/>
                We make it easy for you to find the perfect dining spot for any occasion.<br/> 
                We provide with seamless reservation process as we assure you quality service and exceptional dining experience.
             </h3>
        </div>
    </div>
    <section id="food">
        <h2><font color="white">Special Cuisines</font></h2>
        <div className="food-container">
          <div className="food-type">
            <div className="img-container">
              <img src={pic5} alt="error" />
              <div className="img-content">
                <h3>JAPANESE</h3>
                <a href="#" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic6} alt="error" />
              <div className="img-content">
                <h3>ITALIAN</h3>
                <a href="#" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
          <div className="food-type">
            <div className="img-container">
              <img src={pic7} alt="error" />
              <div className="img-content">
                <h3>INDIAN</h3>
                <a href="#" className="btn" target="blank">Go to Menu</a>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default Homepage