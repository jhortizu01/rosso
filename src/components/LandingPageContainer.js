import React from 'react'
import LandingPageNav from './LandingPageNav'
import LandingContent1 from './LandingContent1'
import LandingContent2 from './LandingContent2'
import FireContent from './FireContent'
import LeafContent from './LeafContent'
import WaterContent from './WaterContent'
import MoonContent from './MoonContent'
import LandingContent3 from './LandingContent3'
import NatureRadioContent from './NatureRadioContent'
import '../styles/LandingPageContainer.scss'
import LandingContent4 from './LandingContent4'
import Footer from './Footer'

const LandingPageContainer = () => {
  return (
    <div className="landing-page-container">
      <LandingPageNav />
      <LandingContent1 />
      <LandingContent2 />
      <FireContent />
      <div className="styling2"/>
      <LeafContent />
      <div className="styling2"/>
      <WaterContent />
      <div className="styling2"/>
      <MoonContent />
      <LandingContent3 />
      <NatureRadioContent />
      <LandingContent4 />
      <Footer />
    </div>
  )
}

export default LandingPageContainer