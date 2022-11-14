import React from 'react'
import MP from '../../assets/logos/pruebamercadopago.png';
import VISA from '../../assets/logos/visa.png';
import AE from '../../assets/logos/american-express.png';
import Maestro from '../../assets/logos/maestro.png';
import TB from '../../assets/logos/transferencia-de-dinero.png';

const Footer = () => {
  return (
    <footer>
    <div class="container-footer">
    <div>
    <h2 class="footer-titulo"><a name="pagos"></a>USÁ EL MEDIO DE PAGO QUE PREFIERAS</h2>
    <p class="footer-subtitulo">ACEPTAMOS TODAS LAS TARJETAS</p>   
  </div>
    <div class="items-footer">
      <div class="item-footer">
        <img class="icono-footer" src= {MP} alt=""/>
        <p class="footer-texto">Mercado Pago</p>
      </div>
      <div class="item-footer-xs">
        <img class="icono-footer" src= {VISA} alt=""/>
        <img class="icono-footer" src= {AE} alt=""/>
        <img class="icono-footer" src= {Maestro} alt=""/>
        <p class="footer-texto">Tarjetas de débito/crédito</p>
      </div>
      <div class="item-footer">
        <img class="icono-footer" src= {TB} alt=""/>
        <p class="footer-texto">Transferencia Bancaria</p>
      </div>
    </div>
    </div>
  </footer>
    
  )
}

export default Footer