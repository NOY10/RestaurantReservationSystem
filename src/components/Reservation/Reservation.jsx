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
  height: '700px'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1558030018-d461fe79233e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1623243020684-9f8bcefe6e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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