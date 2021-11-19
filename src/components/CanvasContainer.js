import React from 'react'
import '../styles/CanvasContainer.scss'
import '../components/Canvas'
import AllToolsContainer from './AllToolsContainer'
import Canvas from './Canvas'

const CanvasContainer = () => {
  return (
    <div className="canvas-container">
      <Canvas />
      <AllToolsContainer />
    </div>
  )
}

export default CanvasContainer