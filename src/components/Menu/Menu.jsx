import './Menu.css';
import Starters from './Menus/Starters';
import Bhutanese from './Menus/Bhutanese';
import Indian from './Menus/Indian';
import Japanese from './Menus/Japanese';
import Drinks from './Menus/Drinks';

function Menu() {
  
  function openMenu(Name) {
            
    var i, sep, links;

    sep = document.getElementsByClassName("sep");
    for (i = 0; i < sep.length; i++) {
        sep[i].style.display = "none";
        
    }

    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
        
        links[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("act");
          current[0].className = current[0].className.replace(" act", "");
          this.className += " act";
        });
    }

    document.getElementById(Name).style.display = "block";
  }

  return (
    <div className="Menu">
      <div>
        <p className='menuS'>Menu</p>
      </div>

      <div class="bdy">
          <div class="blk">
            <a href="#" className="links" onClick={() =>openMenu('st')}>Starters</a>
            <a href="#" className="links act" onClick={() =>openMenu('bt')}>Bhutanese</a>
            <a href="#" className="links" onClick={() =>openMenu('in')}>Indian</a>
            <a href="#" className="links" onClick={() =>openMenu('jp')}>Japanese</a>
            <a href="#" className="links" onClick={() =>openMenu('dr')}>Drinks</a>
          </div>

          <div className="sep" id="st">
              <Starters/>
          </div>

          <div className="sep" id="bt">
              <Bhutanese/>
          </div>
          
          <div className="sep" id="in">
              <Indian />
          </div>

          <div className="sep" id="jp"> 
              <Japanese />
          </div>
          
          <div className="sep" id="dr"> 
              <Drinks />
          </div>

          
      </div>
    </div>
  )
}

export default Menu