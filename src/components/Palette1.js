import React from 'react'
import '../styles/Palette1.scss'

const Palette1 = () => {
  return (
    <div className="palette-1">
      <div className="swatch">
        <button className="color-swatch-1-btn" id="blue" />
        <label className="color-name">Blue</label>
      </div>
      <div className="swatch">
        <button className="color-swatch-1-btn" />
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