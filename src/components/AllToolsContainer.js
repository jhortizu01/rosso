import React, {useState} from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'
import { useCanvas } from '../context/CanvasContext'

const AllToolsContainer = () => {
  const { setActivePalette } = useCanvas();
  const [isVisible, setIsVisible] = useState(true)

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  }


  const handleClick = (event) => {
    event.preventDefault();
    const noPalettesActive = {
    isFireActive: false,
    isLeafActive: false,
    isWaveActive: false,
    isMoonActive: false,
    isCustomActive: false,
    activePalette: ""
  };

    switch (event.target.id) {
      case 'fire-palette-btn':
        setActivePalette({...noPalettesActive, isFireActive: true})
        break;

      case 'leaf-palette-btn':
        setActivePalette({...noPalettesActive, isLeafActive: true})
        break;

      case 'wave-palette-btn':
        setActivePalette({...noPalettesActive, isWaveActive: true})
        break;

      case 'moon-palette-btn':
        setActivePalette({...noPalettesActive, isMoonActive: true})
        break;

      default:
        break;
    }
  }

 return (
    <div className="all-tools-container">
      <div className="palette-selector">
        <button className="hide-palette" onClick={toggleMenu} />
        <button className="color-palette-btn"  id="fire-palette-btn" onClick={(event) => handleClick(event)}>Fire</button>
        <button className="color-palette-btn"  id="leaf-palette-btn" onClick={(event) => handleClick(event)}>Leaf</button>
        <button className="color-palette-btn"  id="wave-palette-btn" onClick={(event) => handleClick(event)}>Wave</button>
        <button className="color-palette-btn"  id="moon-palette-btn" onClick={(event) => handleClick(event)}>Moon</button>
        <button className="tab-plus" />
      </div>
      <ToolsContainer />
    </div>
 )
}

export default AllToolsContainer