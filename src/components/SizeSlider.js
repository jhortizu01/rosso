import React, { useState } from 'react'
import '../styles/SizeSlider.scss'
import { useCanvas  } from '../context/CanvasContext'


const SizeSlider = () => {
  const { setSliderValueState, sliderValueState } = useCanvas()

  const handleSliderChange = (e) => {
    setSliderValueState(e.target.value)
    console.log(sliderValueState)
  }

  return (
    <div className="size-slider">
      <label className="size">Size</label>
      <input 
        className="slider" 
        type="range" 
        min="1" 
        max="20"
        defaultValue="10"
        value={sliderValueState} 
        id="myRange"
        onInput={handleSliderChange}
      />
      <label className="size-value">{sliderValueState}</label>
    </div>
  )
}

export default SizeSlider