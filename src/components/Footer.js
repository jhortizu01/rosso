import React from 'react'
import '../styles/Footer.scss'
import rosso2 from '../assets/rosso2.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="footer">

        <img src={rosso2} alt="rosso logo" className="rosso2" />
        <p className="rights">© 2021 Rosso Paint App LLC. All rights reserved</p>
        <div className="images">
          <img src={instagram} alt="white instagram logo" className="icons" />
          <img src={twitter} alt="white twitter logo" className="icons" />    
          <img src={linkedin} alt="white linkedin logo" className="icons" />  
        </div>

    </div>
  )
}

export default Footer