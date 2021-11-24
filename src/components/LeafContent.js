import React from 'react'
import '../styles/LeafContent.scss'
import leaf from '../assets/leaf.png'
import leafPaletteImg from '../assets/palette2.png'
import ScrollAnimation from 'react-animate-on-scroll'

const LeafContent = () => {
  return (
    <div className="leaf-content">
      <ScrollAnimation animateIn="fadeIn" duration={3}>
        <section className="leaf-description">
          <img src={leaf} alt="leaf icon" className="leaf"/>
          <div className="leaf-styling" />
          <p className="leaf-title"><b>NATURE'S BOUNTIES</b></p>
          <img src={leafPaletteImg}  alt="leaf palette colors" className="leaf-palette-img" />
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default LeafContent