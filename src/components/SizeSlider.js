import React, { useState } from 'react'
import '../styles/SizeSlider.scss'
import { useCanvas  } from '../context/CanvasContext'


const SizeSlider = () => {
  const { setSliderValueState, sliderValueState, handleSliderStateChange } = useCanvas();

  const handleSliderChange = (e) => {
    handleSliderStateChange(parseInt(e.target.value));
    console.log('handleSliderChange')
    console.log('range value', e.target.value)
  }

  return (
    <div className="size-slider">
      <label className="size">Size</label>
      <input 
        className="slider" 
        type="range" 
        min="1" 
        max="20"
        // defaultValue="10"
        value={sliderValueState} 
        id="myRange"
        onInput={handleSliderChange}
      />
      <label className="size-value">{sliderValueState}</label>
    </div>
  )
}

export default SizeSlider