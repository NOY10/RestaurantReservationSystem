import './SpecialCuisine.css'
import pic1 from './img/IND.jpg';
import pic2 from './img/tandoori-chicken.jpg';
import pic3 from './img/Goan-vindaloo.webp';
import pic4 from './img/Rogan.jpeg';

function IndiaC() {
  return (
    <div className="food-menu">
        <h2 className="food-menu-heading">Indian Special Menu</h2>
        <div className="food-menu-container container">
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic1} alt="error" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Thali</h2>
                    <p>
                        A thali is a complete meal consisting of 10 or more dishes.
                        The thali includes Idli, Dosa, Uttapam, Lemon Rice, 
                        Tamarind Rice, Sambhar, Rasam and Pappad. The entire platter
                         has a sweet and tangy aftertaste and that's the USP of this thali.
                    </p>
                    <p className="food-price">Price: Nu.200</p>
                </div>
            </div>
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic2} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Tandoori-chicken</h2>
                    <p>
                    Tandoori chicken is a South Asian dish of chicken marinated in 
                    yogurt and spices and roasted in a tandoor, a cylindrical clay oven.
                    The dish is now popular world-wide. The modern form of the dish was 
                    popularized by the Moti Mahal restaurant in New Delhi in the late 1940s.
                    </p>
                    <p className="food-price">Price: Nu.350</p>
                </div>
            </div>
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic3} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Goan-vindaloo</h2>
                    <p>
                        Goan Vindaloo or vindalho is an Indian curry dish, which is 
                        originally from Goa, based on the Portuguese dish carne de vinha d'alhos.
                        It is known globally in its British Indian form as a staple of curry
                        house and Indian restaurant menus, and is often regarded as a fiery, 
                        spicy dish. The traditional recipe uses pork, but alternative versions 
                        have been prepared with beef, mutton, prawns, chicken, lamb, vegetables and tofu.[4]
                    </p>
                    <p className="food-price">Price: Nu.450</p>
                </div>
            </div>
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic4} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Rogan josh</h2>
                    <p>Rogan josh also spelled roghan josh or roghan ghosht,
                        is an aromatic curried meat dish originating from Kashmir.
                        It is made with red meat—traditionally lamb, mutton, or goat—and 
                        goat—and coloured and flavoured primarily by alkanet flower (or root)
                        and Kashmiri chilies. It is one of the signature recipes of Kashmiri cuisine.
                       
                    </p>
                    <p className="food-price">Price: Nu.350</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndiaC