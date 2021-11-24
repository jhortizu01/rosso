import React from 'react'
import '../styles/LandingPageNav.scss'
import { Route, Link } from 'react-router-dom'
import rosso from '../assets/rosso2.png'
import { HashLink } from 'react-router-hash-link';

const LandingPageNav = () => {
  return (
    <nav>
      <img src={rosso} alt="rosso logo" className="logo" />
      <section className="buttons">
        <Link to='/'><p><b>Home</b></p></Link>
        <Link to='/theteam'><p><b>Meet the Team</b></p></Link>
        <HashLink smooth to="/#landing-content-2"><p><b>Inspiration and Features</b></p></HashLink>
        <HashLink smooth to="/#landing-content-3"><p><b>How To</b></p></HashLink>
        <Link to='/draw'><p><b>Try the App</b></p></Link>
      </section>
    </nav>
  )
}

export default LandingPageNav

