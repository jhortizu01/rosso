import React, { useState} from 'react'
import '../styles/ToolsContainer.scss'
import FirePalette from './FirePalette';
import LeafPalette from './LeafPalette';
import WavePalette from './WavePalette';
import MoonPalette from './MoonPalette';
import ToolSelector from './ToolSelector'
import { useCanvas } from '../context/CanvasContext'


const ToolsContainer = () => {
  const { activePalette } = useCanvas();

  const returnActivePalette = () => {
    if (activePalette.isFireActive) {
      return <FirePalette />;
    } else if (activePalette.isLeafActive) {
      return <LeafPalette />;
    } else if (activePalette.isWaveActive) {
      return <WavePalette />;
    } else if (activePalette.isMoonActive) {
      return <MoonPalette />;
    }
  }

  return (
    <div className="tools-container">
      {returnActivePalette()}
      <ToolSelector />
    </div>
  )
}

export default ToolsContainer