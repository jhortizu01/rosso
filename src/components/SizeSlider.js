import React from 'react'
import '../styles/SizeSlider.scss'
import { useCanvas  } from '../context/CanvasContext'


const SizeSlider = () => {
  const { sliderValueState, handleSliderStateChange } = useCanvas();

  const handleSliderChange = (e) => {
    handleSliderStateChange(parseInt(e.target.value));
  }

  return (
    <div className="size-slider">
      <label className="size">Brush Size</label>
      <input 
        className="slider" 
        type="range" 
        min="1" 
        max="20"
        value={sliderValueState} 
        id="myRange"
        onInput={handleSliderChange}
      />
      <label className="size-value">{sliderValueState}</label>
    </div>
  )
}

export default SizeSlider