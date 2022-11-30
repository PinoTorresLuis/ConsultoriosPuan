import React from 'react';
import LogoDentista from '../../assets/dentista.jpg';

const Main = () => {
  return (
    <main>
    <div class="container-main">
      <div class="container-main-flex">                     
          <img class="capa-imagen" src= {LogoDentista} data-aos="fade-rigth" />
        <div class="capa-texto" data-aos="fade-left">
          <p class="texto-main">En Dental Puán ofrecemos rehabilitación odontologica, resolución de emergencias en el día y una gama completa de servicios dentales realizados por profesionales altamente calificados, siguiendo los más altos estándares de calidad, seguridad e higiene para brindarte la mejor experiencia en todas sus especialidades, a precios razonables.</p>
        </div>              
      </div>    
    </div>            
</main>
  )
}

export default Main