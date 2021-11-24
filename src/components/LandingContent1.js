import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingContent1.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const LandingContent1 = () => {
  return (
    <div className="landingcontent1">
      <ScrollAnimation animateIn="fadeIn" duration="3">
        <div className="explanation1">
          <h1 className="landing-title-1">CREATE<br/>YOUR<br/>PEACE</h1>
          <p className="description-1">Design with our lovingly crafted color palettes inspired by nature, zen philosophy, and even the little joys found in our every day lives.</p>
          <Link to='/draw'><button className="get-started">Get Started</button></Link>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default LandingContent1