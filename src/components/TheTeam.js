import React from 'react'
import '../styles/TheTeam.scss'
import LandingPageNav from './LandingPageNav'
import Abe from './Abe'
import Janika from './Janika'
import Phil from './Phil'
import Footer from './Footer'

const TheTeam = () => {
  return (
    <div>
      <LandingPageNav />
      <div className="the-team-container">
        <Abe />
        <Janika />
        <Phil />
      </div>
      <Footer />
    </div>
    
   
  )
}

export default TheTeam