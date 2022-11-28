import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Img from '../../assets/mujerconrulos.jpg';
import Galeria from '../../assets/galeria.png'
import Galeria2 from '../../assets/galeria2.png'


const Card = () => {
  return (
    <div className="container-section" id="galeria">
    <h2 className="titulo-section"><a name="galeria">NUESTROS TRABAJOS</a></h2>
     <Carousel fade>
     <Carousel.Item>
                 <img className="img-section" src={Galeria2}/>
    </Carousel.Item>   
     <Carousel.Item>
                 <img className="img-section" src={Galeria}/>
    </Carousel.Item>   
    </Carousel> 
  </div>
  )
}

export default Card