import React, { useState } from 'react'
import '../styles/SizeSlider.scss'


const SizeSlider = ({ setSliderSize }) => {
  const [sliderValueState, setSliderValueState] = useState("")

  const handleSliderChange = (e) => {
    setSliderValueState(e.target.value)
    setSliderSize(sliderValueState)
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