import React from 'react';
import LogoDentista from '../../assets/dentista.jpg';

const Main = () => {
  return (
    <main>
    <div class="container-main">
      <div class="container-main-flex">                     
          <img class="capa-imagen" src= {LogoDentista} />
        <div class="capa-texto">
          <p class="texto-main">Desde rehabilitación Odontologica y resolución de urgencias en el día hasta lo último en procedimientos dentales estéticos, Dental Company ofrece una gama completa de servicios dentales de clase mundial realizados por profesionales altamente calificados, siguiendo los más altos estándares de calidad, seguridad e higiene, utilizando lo último en tecnología dental de punta, en cómodas y modernas instalaciones dentales ubicadas en Capital Federal.</p>
        </div>              
      </div>    
    </div>            
</main>
  )
}

export default Main