import React, { useState } from 'react'
import '../styles/CanvasContainer.scss'
import '../components/Canvas'
import AllToolsContainer from './AllToolsContainer'
import Canvas from './Canvas'
import SizeSlider from './SizeSlider'

const CanvasContainer = ({}) => {
  const [sizeSliderHidden, setSliderHidden] = useState(true)
  const [sliderSize, setSliderSize] = useState("")

  const slider = sizeSliderHidden ? null : <SizeSlider setSliderSize={setSliderSize} sliderSize={sliderSize}/>

  const toggleSlider = () => {
    if(sizeSliderHidden === true) {
      setSliderHidden(false)
      console.log(sizeSliderHidden)
    } else {
      setSliderHidden(true)
      console.log(sizeSliderHidden)
    }
  }
  
  return (
    <div className="canvas-container">
      <Canvas />
      {slider}
      <AllToolsContainer toggleSlider={toggleSlider} />
    </div>
  )
}

export default CanvasContainer