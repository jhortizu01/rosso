import React from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'
import PaletteSelector from './PaletteSelector'
import { useCanvas } from '../context/CanvasContext'

const AllToolsContainer = () => {
  const { menuVisibility } = useCanvas();

 return (
    <div className={menuVisibility}>
      <PaletteSelector />
      <ToolsContainer />
    </div>
 )
}

export default AllToolsContainer