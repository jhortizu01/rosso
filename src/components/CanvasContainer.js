import React, { useContext, useState } from 'react'
import '../styles/CanvasContainer.scss'
import '../components/Canvas'
import AllToolsContainer from './AllToolsContainer'
import Canvas from './Canvas'
import SizeSlider from './SizeSlider'
import { useCanvas } from '../context/CanvasContext'

const CanvasContainer = ({}) => {
  const { sizeSliderHidden } = useCanvas()
  
  

  const slider = sizeSliderHidden ? null : <SizeSlider />


  
  return (
    <div className="canvas-container">
      <Canvas />
      {slider}
      <AllToolsContainer />
    </div>
  )
}

export default CanvasContainer