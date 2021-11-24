import React from 'react'
import '../styles/FireContent.scss'
import fire from '../assets/fire.png'
import palette from '../assets/palette1.png'
import ScrollAnimation from 'react-animate-on-scroll'

const FireContent = () => {
  return (
    <div className="fire-content">
      <ScrollAnimation animateIn="fadeIn" duration="3">
        <section className="fire-description">
          <img src={fire} alt="fire icon" className="fire"/>
          <div className="styling" />
          <p className="fire-title"><b>WARM REMEMBRANCES</b></p>
          <img src={palette} alt="fire palette colors" className="fire-palette-img" />
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default FireContent