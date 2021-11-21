import React from 'react'
import '../styles/AllToolsContainer.scss'
import ToolsContainer from './ToolsContainer'


const AllToolsContainer = () => {
 return (
    <div className="all-tools-container">
      <div className="palette-selector">
        <button className="hide-palette" />
        <button className="color-palette-btn">Fire</button>
        <button className="color-palette-btn">Leaf</button>
        <button className="color-palette-btn">Wave</button>
        <button className="color-palette-btn">Moon</button>
        <button className="tab-plus" />
      </div>
      <ToolsContainer />
    </div>
 )
}

export default AllToolsContainer