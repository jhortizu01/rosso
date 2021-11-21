import React from 'react'
import '../styles/FirePalette.scss'
import { useCanvas } from '../context/CanvasContext'
import { fireSwatch } from './swatchColorData'

const FirePalette = () => {
  const { handleSetColor } = useCanvas();

  const fireSwatchButtons = fireSwatch.map((color) => {
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
      {fireSwatchButtons}
    </div>
  )
}

export default FirePalette