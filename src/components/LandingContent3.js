import React from 'react'
import '../styles/LandingContent3.scss'
import ReactPlayer from "react-player"

const LandingContent3 = () => {
  return (
    <div className="landing-content-3" id="landing-content-3">
      <p><b>How To</b></p>
      <ReactPlayer
        url="https://youtu.be/QxPJBebYJ4Q"
      />
    </div>
  )
}

export default LandingContent3