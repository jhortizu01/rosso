import React from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'
import PaletteSelector from './PaletteSelector'
import { useCanvas } from '../context/CanvasContext'

const AllToolsContainer = () => {
  const { menuVisibility } = useCanvas();

 return (
   <div>
      <PaletteSelector />
    <div className={menuVisibility}>
      <div className='scrollbox'>
      <ToolsContainer /></div>
    </div>
    </div>
 )
}

export default AllToolsContainer