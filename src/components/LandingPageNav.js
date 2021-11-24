import React from 'react'
import '../styles/LandingPageNav.scss'
import { Route, Link } from 'react-router-dom'
import rosso from '../assets/rosso2.png'

const LandingPageNav = () => {
  return (
    <nav>
      <img src={rosso} alt="rosso logo" className="logo" />
      <section className="buttons">
        <Link to='/'><p><b>Home</b></p></Link>
        <Link to='/theteam'><p><b>Meet the Team</b></p></Link>
        <Link to='/draw'><p><b>Try the App</b></p></Link>
      </section>
    </nav>
  )
}

export default LandingPageNav