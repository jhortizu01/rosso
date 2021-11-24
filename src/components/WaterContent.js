import React from 'react'
import '../styles/WaterContent.scss'
import water from '../assets/water.png'
import waterPalette from '../assets/waterpalette.png'
import ScrollAnimation from 'react-animate-on-scroll'

const WaterContent = () => {
  return (
    <div className="water-content">
      <ScrollAnimation animateIn="fadeIn" duration="3">
      <section className="water-description">
        <img src={water} alt="water icon" className="water"/>
        <div className="water-styling" />
        <p className="water-title"><b>AZURE NOSTALGIA</b></p>
        <img src={waterPalette} alt="water palette colors" className="water-palette-img" />
      </section>
      </ScrollAnimation>
    </div>
  )
}

export default WaterContent