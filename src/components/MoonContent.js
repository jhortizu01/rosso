import React from 'react'
import '../styles/MoonContent.scss'
import moon from '../assets/moon.png'
import moonPalette from '../assets/moon-palette.png'
import ScrollAnimation from 'react-animate-on-scroll'

const MoonContent = () => {
  return (
    <div className="moon-content">
      <ScrollAnimation animateIn="fadeIn" duration={3}>
        <section className="moon-description">
          <img src={moon} alt="moon icon" className="moon"/>
          <div className="moon-styling" />
          <p className="moon-title"><b>DUSKY REVELATIONS</b></p>
          <img src={moonPalette} alt="moon palette colors" className="moon-palette-img" />
        </section>
      </ScrollAnimation>
  </div>
  )
}

export default MoonContent