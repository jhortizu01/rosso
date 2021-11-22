import React, { useState } from 'react'
import '../styles/SizeSlider.scss'
import { useCanvas  } from '../context/CanvasContext'


const SizeSlider = () => {
  const { setSliderValueState, sliderValueState } = useCanvas()
  const [slider, setSliderState]  = useState(10)
  
  const handleSliderChange = (e) => {
    let sliderNum = Number(e.target.value)
    console.log(typeof sliderNum)
    setSliderState(sliderNum)
    setSliderValueState(slider)
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
        value={slider} 
        id="myRange"
        onInput={handleSliderChange}
      />
      <label className="size-value">{slider}</label>
    </div>
  )
}

export default SizeSlider