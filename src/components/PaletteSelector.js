import React, { useState } from 'react'
import '../styles/AllToolsContainer.scss'
import { useCanvas } from '../context/CanvasContext'

const PaletteSelector = () => {
  const { setActivePalette, isMenuVisible, setIsMenuVisible, setMenuVisibility, activeTab, setActiveTab } = useCanvas();

  const [paletteArrow, setPaletteArrow] = useState("hide-palette arrow-down")

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
        setActiveTab({    
          fireTabIsActive: "color-palette-btn active fire-active",
          leafTabIsActive: "color-palette-btn not-active leaf-inactive",
          waveTabIsActive: "color-palette-btn not-active wave-inactive",
          moonTabIsActive: "color-palette-btn not-active moon-inactive"
        })
        
        break;

      case 'leaf-palette-btn':
        setActivePalette({...noPalettesActive, isLeafActive: true})
        setActiveTab({    
          fireTabIsActive: "color-palette-btn not-active fire-inactive",
          leafTabIsActive: "color-palette-btn active leaf-active",
          waveTabIsActive: "color-palette-btn not-active wave-inactive",
          moonTabIsActive: "color-palette-btn not-active moon-inactive"
        })
        break;

      case 'wave-palette-btn':
        setActivePalette({...noPalettesActive, isWaveActive: true})
        setActiveTab({    
          fireTabIsActive: "color-palette-btn not-active fire-inactive",
          leafTabIsActive: "color-palette-btn not-active leaf-inactive",
          waveTabIsActive: "color-palette-btn active wave-active",
          moonTabIsActive: "color-palette-btn not-active moon-inactive"
        })
        break;

      case 'moon-palette-btn':
        setActivePalette({...noPalettesActive, isMoonActive: true})
        setActiveTab({    
          fireTabIsActive: "color-palette-btn not-active fire-inactive",
          leafTabIsActive: "color-palette-btn not-active leaf-inactive",
          waveTabIsActive: "color-palette-btn not-active wave-inactive",
          moonTabIsActive: "color-palette-btn active moon-active"
        })
        break;

      default:
        break;
    }
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (isMenuVisible) {
      setMenuVisibility("all-tools-container hide")
      setPaletteArrow("hide-palette arrow-up")
    } else {
      setMenuVisibility("all-tools-container show")
      setPaletteArrow("hide-palette arrow-down")

    }
  }


 return (
      <div className="palette-selector">
        <button className={paletteArrow} onClick={() => toggleMenu()} />
        <button className={activeTab.fireTabIsActive}  id="fire-palette-btn" onClick={(event) => handleClick(event)}/>
        <button className={activeTab.leafTabIsActive}  id="leaf-palette-btn" onClick={(event) => handleClick(event)} />
        <button className={activeTab.waveTabIsActive}  id="wave-palette-btn" onClick={(event) => handleClick(event)} />
        <button className={activeTab.moonTabIsActive}  id="moon-palette-btn" onClick={(event) => handleClick(event)} />
        {/* <button className="tab-plus" /> */}
      </div>
 )
}

export default PaletteSelector