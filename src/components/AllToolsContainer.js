import React, {useState} from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'
import { useCanvas } from '../context/CanvasContext'
import PaletteSelector from './PaletteSelector'

const AllToolsContainer = () => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  }

 return (
    <div className="all-tools-container">
      <PaletteSelector />
      <ToolsContainer />
    </div>
 )
}

export default AllToolsContainer