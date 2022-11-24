import React from 'react'
import WP from '../../assets/logos/whatsapp (1).png';
import IG from '../../assets/logos/instagram (2).png';

const Header = () => {

  window.addEventListener("scroll", function(){
    let showBtn = document.querySelector(".container_btn");
    showBtn.classList.toggle("container_show_btn",window.scrollY> 300 && window.scrollY < 2000);
  })

  return (
    <header>
    <div class="container-header">
        <div class="header-box">
          <div>
          <a className='a_link' href="https://wa.me/5491162422053?text=Hola%20necesito%20información%20.%20Gracias!"><img class="img-header" src={WP}/></a>
        </div>  
          <i><a class="header-a" href="https://wa.me/5491162422053?text=Hola%20necesito%20información%20.%20Gracias!">Saca turno via Whatsapp</a></i>
        </div>
        <div class="header-box">
        <div> 
        <a className='a_link' href="https://www.instagram.com/puandental_odontologia/"><img class="img-header" src={IG}/></a>
        </div>
          <i><a class="header-a" href="https://www.instagram.com/puandental_odontologia/">Entrá y mira nuestro Instagram!</a></i>
        </div>
        <div className='container_btn'>
        <ul className='container_show_btn'>
          <li><a className='a_link' href="https://wa.me/5491162422053?text=Hola%20necesito%20información%20.%20Gracias!"><img className='btn_active' src={WP}/></a></li>
          <li><a className='a_link' href="https://www.instagram.com/puandental_odontologia/"><img className='btn_active' src={IG}/></a></li>
        </ul>
        </div>
    </div>
    </header>
  )
}

export default Header