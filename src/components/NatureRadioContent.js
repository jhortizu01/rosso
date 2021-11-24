import React from 'react'
import '../styles/NatureRadioContent.scss'
import { NavLink } from 'react-router-dom'
import radioLogo from '../assets/radio-logo.png'

const NatureRadioContent = () => {
  return (
    <div className="nature-radio">
      <div className="content">
        <img src={radioLogo} alt="nature radio graphic" className="radio-graphic"/>
        <p className="radio-description-1">
          All soundtracks provided were created by NatureRadio, a non-profit organization created to archive and share the natural sounds from the world’s national parks and protected areas.
        </p>
        <p className="radio-description-2">
          Their work aims to foster an awareness of the natural world, and promote conservation and joy for our Earth’s beautiful and biologically rich places.
        </p>
        <a href='https://www.patreon.com/natureradio?fan_landing=true>'><button className="radio-button">Support their work with a donation on Patreon</button></a>
      </div>
    </div>
  )
}

export default NatureRadioContent