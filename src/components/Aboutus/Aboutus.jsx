import './AboutUs.css'
import pic1 from './h1.jpg'

function Aboutus() {
  return (
    <div>
      <section className="about">
        <div className="about-wrapper container">
            <div className="about-img">
                <img src={pic1} alt="food" />
            </div>
            <div className="about-text">
                <p className="small">About Us</p>
                <h2>We've been making healthy food for last 9 years</h2>
                <p>
                    We cordially invite you to relax, take it easy, 
                    and take in the gorgeous sights and hints of the surroundings,
                    as our greatest chef prepares a delectable meals for you using
                    only the finest and freshest ingredients. 
                    The parent restaurant,which was constructed in 1987,
                      is where Gawa Restaurant gets its history.
                      We make it easy for you to find the perfect dining spot for any occasion.<br/> 
                      We provide with seamless reservation process as we assure you quality service 
                      and exceptional dining experience.
                    <br/><br/>
                    <i>Make the most of your dining experience with us
                      by enjoying our exquisite cuisine!</i>

                </p>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default Aboutus