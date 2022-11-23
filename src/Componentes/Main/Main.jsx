import React from 'react';
import LogoDentista from '../../assets/dentista.jpg';

const Main = () => {
  return (
    <main>
    <div class="container-main">
      <div class="container-main-flex">                     
          <img class="capa-imagen" src= {LogoDentista} data-aos="fade-rigth" />
        <div class="capa-texto" data-aos="fade-left">
          <p class="texto-main">Desde rehabilitación Odontologica y resolución de urgencias en el día hasta lo último en procedimientos dentales estéticos, Dental Púan ofrece una gama completa de servicios dentales realizados por profesionales altamente calificados, siguiendo los más altos estándares de calidad, seguridad e higiene,en cómodas y modernas instalaciones dentales ubicadas en Caseros.</p>
        </div>              
      </div>    
    </div>            
</main>
  )
}

export default Main