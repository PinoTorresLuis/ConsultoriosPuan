import React from 'react';
import Diente from '../../assets/logos/diente (1).png';

const Article = () => {
  return (
    <article>
    <div class="container-article">
      <h4 class="articulo-titulo"><a name="tratamientos">TRATAMIENTOS</a></h4> 
          {/* ITEM 1 */}
            <div class="container-items" data-aos="fade-up">
                <img class="item-imagen" src= {Diente} alt=""/>
                <h1 class="item-h">Implantes</h1>
                <p class="item-p">Por medio de implantes dentales logramos el reemplazo de una o varias piezas dentales faltantes. Plan de financiación a tu medida.</p>
            </div>
            {/* ITEM 2 */}
            <div class="container-items" data-aos="fade-up">
              <img class="item-imagen" src= {Diente} alt=""/>
              <h1 class="item-h">Ortodoncia</h1>
              <p class="item-p">Logramos funcionalidad adecuada y estética buco-facial. Tratamientos tradicional, estético, lingual, invisible.</p>
            </div>
           {/* ITEM 3 */}
            <div class="container-items" data-aos="fade-up">
            <img class="item-imagen" src= {Diente} alt=""/>
            <h1 class="item-h">Estética Dental</h1>
            <p class="item-p">Devolvemos una apariencia natural a tus elementos dentarios, cuidando cada aspecto estético de tu boca al máximo.</p>
            </div>
        {/* ITEM 4  */}
          <div class="container-items" data-aos="fade-down">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Endodoncia</h1>
          <p class="item-p">Tratamos las enfermedades que ocurren en el tejido más interno del diente y la pulpa.</p>
          </div>
        {/* ITEM 5 */}
          <div class="container-items" data-aos="fade-down">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Laboratorio Propio</h1>
          <p class="item-p">Ofrecemos mayor agilidad, trabajos de alta calidad con tecnología CAD/CAM y precios más accesibles.</p>
          </div>
        {/* ITEM 6 */}
          <div class="container-items" data-aos="fade-down">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Prótesis</h1>
          <p class="item-p">Permite sustituir a los dientes y otras estructuras orales como (encías y hueso) mejorando de forma estética, incluso el tono de voz y permitiendo degustar mejor los alimentos debido a que se pueden masticar de mejor forma.</p>
          </div>
  </div>
  </article>
  )
}

export default Article