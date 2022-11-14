import React from 'react'
import WP from '../../assets/logos/whatsapp (1).png';
import IG from '../../assets/logos/instagram (2).png';

const Header = () => {
  return (
    <header>
    <div class="container-header">
        <div class="header-box"><a name="inicio"></a>
          <div>
          <img class="img-header" src={WP}/>
        </div>  
          <i><a class="header-a" href="#">Saca turno via Whatsapp</a></i>
        </div>
        <div class="header-box">
        <div> 
          <img class="img-header" src={IG}/>
        </div>
          <i><a class="header-a" href="#">Entra y mirá nuestro Instagram!</a></i>
        </div>
    </div>
    </header>
  )
}

export default Header