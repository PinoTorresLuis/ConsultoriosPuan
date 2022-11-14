import React from 'react';
import Diente from '../../assets/logos/diente (1).png';

const Article = () => {
  return (
    <article>
    <div class="container-article">
      <h4 class="articulo-titulo"><a name="tratamientos">TRATAMIENTOS</a></h4> 
          {/* ITEM 1 */}
            <div class="container-items" id="btnArt">
                <img class="item-imagen" src= {Diente} alt=""/>
                <h1 class="item-h">Implantes</h1>
                <p class="item-p">Por medio de implantes dentales logramos el reemplazo de una o varias piezas dentales faltantes. Plan de financiación a tu medida.</p>
            </div>
            {/* ITEM 2 */}
            <div class="container-items">
              <img class="item-imagen" src= {Diente} alt=""/>
              <h1 class="item-h">Ortodoncia</h1>
              <p class="item-p">Logramos funcionalidad adecuada y estética buco-facial. Tratamientos tradicional, estético, lingual, invisible.</p>
            </div>
           {/* ITEM 3 */}
            <div class="container-items">
            <img class="item-imagen" src= {Diente} alt=""/>
            <h1 class="item-h">Estética Dental</h1>
            <p class="item-p">Devolvemos una apariencia natural a tus elementos dentarios, cuidando cada aspecto estético de tu boca.</p>
            </div>
        {/* ITEM 4  */}
          <div class="container-items">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Endodoncia</h1>
          <p class="item-p">Tratamos las enfermedades que ocurren en el tejido más interno del diente y la pulpa.</p>
          </div>
        {/* ITEM 5 */}
          <div class="container-items">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Odontopediatria</h1>
          <p class="item-p">Especialistas preparados para la atención y contención de los más pequeños.</p>
          </div>
        {/* ITEM 6 */}
          <div class="container-items">
          <img class="item-imagen" src= {Diente} alt=""/>
          <h1 class="item-h">Urgencias</h1>
          <p class="item-p">Estamos en esas situaciones inesperadas cuando necesitas una solución inmediata.</p>
          </div>
  </div>
  </article>
  )
}

export default Article