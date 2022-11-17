import React from 'react'
import WP from '../../assets/logos/whatsapp (1).png';
import IG from '../../assets/logos/instagram (2).png';

const Header = () => {

  window.addEventListener("scroll", function(){
    let showBtn = document.querySelector(".container_btn");
    showBtn.classList.toggle("container_show_btn",window.scrollY> 100 && window.scrollY < 2000);
  })

  return (
    <header>
    <div class="container-header">
        <div class="header-box">
          <div>
          <img class="img-header" src={WP}/>
        </div>  
          <i><a class="header-a" href="#">Saca turno via Whatsapp</a></i>
        </div>
        <div class="header-box">
        <div> 
          <img class="img-header" src={IG}/>
        </div>
          <i><a class="header-a" href="#">Entrá y mira nuestro Instagram!</a></i>
        </div>
        <div className='container_btn'>
        <ul className='container_show_btn'>
          <li><a className='a_link' href="https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información"><img className='btn_active' src={WP}/></a></li>
          <li><a className='a_link' href="https://wa.me/+34635282005?texto=Hola%20IT%20Work%20necesito%20información"><img className='btn_active' src={IG}/></a></li>
        </ul>
        </div>
    </div>
    </header>
  )
}

export default Header