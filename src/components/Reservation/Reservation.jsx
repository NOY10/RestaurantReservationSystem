import {useState} from 'react';
import './Reservation.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Premium from './premium';
import Normal from './normal';


function Reservation() {
  const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
  ];
  const properties = {
    autoplay: true,
    arrows: false,
    // infinite: false,
  };

  const [clicked,setClicked] = useState('normal');
  const premium= () =>{
    setClicked('premium')
  }
  const normal= () =>{
    setClicked('normal')
  }
 
  return (
    <div className="reservation">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
        <div className="Rbody">
          {/* <div className="buttonS">
            <button onClick={normal}>Normal</button>
            <button onClick={premium}>Premium</button> 
          </div> */}
          {/* <div className="private"> */}
            {clicked=='normal'?<Normal/>:<Premium />}
          {/* </div> */}
        </div>
    </div>
  )
}

export default Reservation