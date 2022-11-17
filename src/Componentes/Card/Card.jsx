import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Img from '../../assets/mujerconrulos.jpg';


const Card = () => {
  return (
    <div className="container-section" id="galeria">
    <h2 className="titulo-section"><a name="galeria">GALERIA</a></h2>
     <Carousel fade>
     <Carousel.Item>
                 <img className="img-section" src= {Img}/>
    </Carousel.Item>   
     <Carousel.Item>
                 <img className="img-section" src= 'https://www.portalodontologos.mx/noticias/noticias/interna-ortodoncia-calidad-vida.jpg'/>
    </Carousel.Item>   
    </Carousel> 
  </div>
  )
}

export default Card