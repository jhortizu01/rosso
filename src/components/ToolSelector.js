import React from 'react'
import '../styles/ToolSelector.scss'
import { useCanvas } from '../context/CanvasContext'
import paintBrush from '../assets/paint-brush.svg'

const ToolSelector = () => {
 const { clearCanvas, handleSetColor, toggleSlider, paintColor } = useCanvas();


  return (
    <div className="tool-selector">
      <section className="small-buttons">
        <div className="selector-top">
        <div className="tool-btn" id="fakebtn"/>
        <button className="tool-btn" id="paint-brush"
          style={{  
          WebkitMask:  `url(${paintBrush}) no-repeat 50% 50%`,
          backgroundColor: `${paintColor}`,
          mask: `url(${paintBrush}) no-repeat 50% 50%`}} />
          <button className="tool-btn" id="size-selector" onClick={toggleSlider} />
        </div>
        <div className="selector-bottom">
          <button className="tool-btn" id="erase" onClick={(event) => handleSetColor(event)} data-color="#FFFFFF"/>
          <button className="tool-btn" id="trash" onClick={() => clearCanvas()}/>
        </div>
      </section>
    </div>
  )
}

export default ToolSelector