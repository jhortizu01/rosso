import React from 'react'
import '../styles/MoonPalette.scss'
import { useCanvas } from '../context/CanvasContext'
import { moonSwatch } from './swatchColorData'

const MoonPalette = () => {
  const { handleSetColor } = useCanvas();

  const moonSwatchButtons = moonSwatch.map((color) => {
    return (
      //data-color creates attribute that can be accessed with useRef to switch brush color
    <div className="swatch">
        <button className="color-swatch-1-btn" id={color.id} onClick={(event) => handleSetColor(event)} data-color={color.hex}/>
        <label className="color-name">{color.color_name}</label>
      </div>
    )
})

  return (
    <div className="palette-1">
      {moonSwatchButtons}
    </div>
  )
}

export default MoonPalette;