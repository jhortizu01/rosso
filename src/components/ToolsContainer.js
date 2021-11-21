import React from 'react'
import '../styles/ToolsContainer.scss'
import FirePalette from './FirePalette';
import LeafPalette from './LeafPalette';
import WavePalette from './WavePalette';
import MoonPalette from './MoonPalette';
import CustomPalette from './CustomPalette';
import ToolSelector from './ToolSelector'

const ToolsContainer = () => {
  //use context for a state variable object with properties for each palette assigned a boolean
    //if true, that element's palette will render

  return (
    <div className="tools-container">
    {/* TO DO: Add conditional rendering for Palettes */}
      <MoonPalette />
      {/* <Palette2 /> */}
      {/* <Palette3 /> */}
      <ToolSelector />
    </div>
  )
}

export default ToolsContainer