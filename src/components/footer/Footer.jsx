import React from 'react'
import './footer.css'
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook, TiSocialYoutube} from 'react-icons/ti'

const Footer = () => {
  return (
    <footer id='Footer' className='footer__container'>
      <div className='footer__lists'>
        <ul className='footer__lists-sac'>
          <h3 className='footer__lists-caller'>SAC</h3>
          <li>Atendimento ao Cliente</li>
          <li>Pesquisa de Satisfação</li>
          <li>Reporte um erro</li>
        </ul>
      </div>
      <div className='footer__lists'>
        <ul className='footer__lists-acme'>
          <h3 className='footer__lists-caller'>A ACME</h3>
          <li>Conheça nossa história</li>
          <li>Trabalhe conosco</li>
          <li>Entre em contato</li>
        </ul>
      </div>
      <div className='footer__social'>
        <h3 className='footer__lists-caller'>SIGA NOSSAS REDES</h3>
        <span><TiSocialTwitter size={30}/></span>
        <span><TiSocialInstagram size={30}/></span>
        <span><TiSocialFacebook size={30}/></span>
        <span><TiSocialYoutube size={30}/></span>
      </div>
    </footer>
  )
}

export default Footer