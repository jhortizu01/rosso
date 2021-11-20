import React from 'react'
import '../styles/Palette1.scss'
import { useCanvas } from '../context/CanvasContext'


const Palette1 = () => {
  const { handleSetColor } = useCanvas();

  return (
    <div className="palette-1">
      <div className="swatch">
        <button className="color-swatch-1-btn" id="swatch1-1" onClick={(event) => handleSetColor(event)} data-color="#0367A6"/>
        <label className="color-name">Blue</label>
      </div>
      <div className="swatch">
        <button className="color-swatch-1-btn" id="swatch1-2" />
        <label className="color-name">Indigo</label>
      </div>      
      <div className="swatch">
        <button className="color-swatch-1-btn" />
        <label className="color-name">Purple</label>
      </div>
      <div className="swatch">
        <button className="color-swatch-1-btn" />
        <label className="color-name">Violet</label>
      </div>
      <div className="swatch">
        <button className="color-swatch-1-btn" />
        <label className="color-name">Magenta</label>
      </div>
      <div className="swatch">
        <button className="color-swatch-1-btn" />
        <label className="color-name">Saphire</label>
      </div>
    </div>
  )
}

export default Palette1