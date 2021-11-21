import React, { useState, useEffect } from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'
import PaletteSelector from './PaletteSelector'
import { useCanvas } from '../context/CanvasContext'

const AllToolsContainer = () => {
  const { isMenuVisible } = useCanvas();

  let visibility = "all-tools-container hide";
  useEffect(() => {
    if (isMenuVisible) {
      visibility = "all-tools-container show";
    }
  },)

 return (
    <div className={visibility}>
      <PaletteSelector />
      <ToolsContainer />
    </div>
 )
}

export default AllToolsContainer