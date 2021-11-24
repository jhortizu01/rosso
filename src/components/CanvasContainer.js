import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/CanvasContainer.scss'
import '../components/Canvas'
import AllToolsContainer from './AllToolsContainer'
import Canvas from './Canvas'
import SizeSlider from './SizeSlider'
import { useCanvas } from '../context/CanvasContext'
import back from '../assets/back.png'

const CanvasContainer = ({}) => {
  const { sizeSliderHidden } = useCanvas()

  const slider = sizeSliderHidden ? null : <SizeSlider />
  
  return (
    <div className="canvas-container">
      <Link to='/'>
        <img src={back} alt="back arrow" className="back" />
      </Link>
      <Canvas />
      {slider}
      <AllToolsContainer />
    </div>
  )
}

export default CanvasContainer