import React from 'react'
import '../styles/LandingContent4.scss'
import { NavLink } from 'react-router-dom'
import mintbean from '../assets/mintbean.png'

const LandingContent4 = () => {
  return (
    <div className="landing-content-4">
      <p className="zen-title">FIND YOUR ZEN</p>
      <p className="zen-title-2">with <b>Rosso</b>.</p>
      <NavLink to='/draw'><button className="zen-button">Try the App</button></NavLink>
      <NavLink to='/theteam'><button className="zen-button">Meet the Team</button></NavLink>
      <p className="disclaimer">This project was built as part of the Mintbean Jr. Developer Hackathon.</p>
      <a href="https://info.mintbean.io/"><img src={mintbean} alt="mintbean logo" className="mintbean" /></a>
    </div>
  )
}

export default LandingContent4