import './SpecialCuisine.css'
import pic1 from './img/noodle.jpeg';
import pic2 from './img/sushi.jpg';
import pic3 from './img/Tempura.jpg';
import pic4 from './img/chicken-katsu-curry-rice.jpg';

function JapaneseC() {
  return (
    <div className="food-menu">
    <h2 className="food-menu-heading">Japanese Special Menu</h2>
    <div className="food-menu-container container">
        <div className="food-menu-item">
            <div className="food-img">
                <img src={pic1} alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-title">Ramen</h2>
                <p>
                    is a Japanese noodle dish. It consists of Chinese-style 
                    wheat noodles served in a broth; common flavors are soy 
                    sauce and miso, with typical toppings including sliced pork,
                    nori (dried seaweed),menma (bamboo shoots), and scallions.
                </p>
                <p className="food-price">Price: Nu.170</p>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
                <img src={pic4} alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">chicken-katsu-curry-rice</h2>
                <p>
                    The Japanese curry rice is creamy, starchy, and 
                    easy for a family dinner. The dish usually contains
                    meat with some vegetable.It's delicious, nourishing,
                    nd quite filling because it's paired mostly with rice.
                </p>
                <p className="food-price">Price: Nu.350</p>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
                <img src={pic2} alt="error" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Sushi</h2>
                <p>
                    Sushi is a Japanese dish of prepared vinegared rice,
                     usually with some sugar and salt, accompanied by a 
                     variety of ingredients, such as seafood, often raw, 
                     and vegetables. Styles of sushi and its presentation 
                     vary widely, but the one key ingredient is "sushi rice", 
                     also referred to as shari , or sumeshi.
                </p>
                <p className="food-price">Price: Nu.250</p>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
                <img src={pic3} alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Tempura</h2>
                <p>
                    Tempura is a typical Japanese dish usually consisting of 
                    seafood, meat and vegetables that have been battered and 
                    deep fried. The dish was introduced by the Portuguese in 
                    Nagasaki through fritter-cooking techniques in the 16th century. 
                    The word tempura comes from the Latin word tempora, a term referring 
                    to times of fasting when the church dictated that Catholics go meatless.
                </p>
                <p className="food-price">Price: Nu.350</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default JapaneseC