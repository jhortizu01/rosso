import React from 'react'
import '../styles/ToolsContainer.scss'
import Palette1 from './Palette1'
import Palette2 from './Palette2'
import Palette3 from './Palette3'
import ToolSelector from './ToolSelector'

const ToolsContainer = ({ toggleSlider }) => {
  return (
    <div className="tools-container">
      <Palette1 />
      {/* <Palette2 /> */}
      {/* <Palette3 /> */}
      <ToolSelector toggleSlider={toggleSlider}/>
    </div>
  )
}

export default ToolsContainer