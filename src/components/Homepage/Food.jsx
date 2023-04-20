import React from 'react'
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import './Food.css'

function Food() {
  return (
    <div className="banner">
        <div className="center1">
            <img src = {pic1} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center2">
            <h3 color="#a8b4b9">TRADITION</h3>
            <p>
                Enjoy to your heart's content with traditional cuisine straight from the himalayas.
                We pride ourselves on serving the most authentic and delicious Bhutanese cuisine, using only the freshest and highest quality ingredients.
            </p>
        </div>
        <div className="center3">
        <img src={pic2}  width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center4">
            <h3 color="#a8b4b9">AMBIANCE</h3>
            <p>    
                The atmosphere within a room can be the determining factor in a guest's overall experience. 
                We have taken great care to select a range of ambiance options that will enhance our guests' stay. Discover the impact of ambiance by utilizing our room reservation system today!</p>
        </div>
        <div className="center5">
            <img src ={pic3} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center6">
            <h3 color="#a8b4b9">SPECIALS</h3>
            <p> 
                There are also provisions for international cuisines!<br/>
                We offer a vast selection of international cuisines, from Italian classics like pizza and pasta, to spicy Indian curries and savory Japanese ramen.</p>
        </div>
        <div className="center7">
            <img src={pic4} width="200px" style={{borderRadius: "20%"}}/>
        </div>
        <div className="center8">
            <h3 color="#a8b4b9">QUALITY SERVICE</h3>
            <p> 
                We make it easy for you to find the perfect dining spot for any occasion.<br/> 
                We provide with seamless reservation process as we assure you quality service and exceptional dining experience.
            </p>
        </div>
    </div>
  
  )
}

export default Food