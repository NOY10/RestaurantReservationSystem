import './SpecialCuisine.css'
import pic1 from './img/fettuccine-al-pomodoro.jpg';
import pic2 from './img/Italian_Risotto.png';
import pic3 from './img/masala-pasta.jpg';
import pic4 from './img/vitello-tonnato.png';

function ItalianC() {
  return (
    <div className="food-menu">
        <h2 className="food-menu-heading">Italian Special Menu</h2>
        <div className="food-menu-container container">
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic1} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-title">Fettuccine-al-pomodoro</h2>
                    <p>
                        Fettuccine al Pomodoro is intended to be a lighter
                         and more quickly made pasta dish than pasta with 
                         the long cooked meat sauce.Cooked al dente, 
                         the thick fettuccine stands up well to the sauce.
                    </p>
                    <p className="food-price">Price: Nu.250</p>
                </div>
            </div>

            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic2} alt="error" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Italian-Risotto</h2>
                    <p>
                        Risotto from riso meaning "rice" is a northern Italian rice 
                        dish cooked with broth until it reaches a creamy consistency.
                         The broth can be derived from meat, fish, or vegetables. 
                         Many types of risotto contain butter, onion, white wine.
                          
                    </p>
                    <p className="food-price">Price: Nu.350</p>
                </div>
            </div>
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic3} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Masala-pasta</h2>
                    <p>
                        Pasta is a type of food typically made from an unleavened 
                        dough of wheat flour mixed with water or eggs, and formed 
                        into sheets or other shapes, then cooked by boiling or baking.
                        Rice flour, or legumes such as beans or lentils, are sometimes
                        used in place of wheat flour to yield a different taste and
                        texture, or as a gluten-free alternative.
                        Pasta is a staple food of Italian cuisine.
                    </p>
                    <p className="food-price">Price: Nu.250</p>
                </div>
            </div>
            <div className="food-menu-item">
                <div className="food-img">
                    <img src={pic4} alt="" />
                </div>
                <div className="food-description">
                    <h2 className="food-titile">Vitello-tonnato</h2>
                    <p>
                        Vitello tonnato is a Piedmontese dish of cold, 
                        sliced veal covered with a creamy, mayonnaise-like 
                        sauce that has been flavored with tuna. It is served
                         chilled or at room temperature, generally in the 
                         summertime, as the main course of an Italian meal or
                          as "an exceedingly elegant antipasto for an elaborate dinner.
                          
                    </p>
                    <p className="food-price">Price: Nu.550</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItalianC