import React from 'react'
import '../styles/ToolSelector.scss'
import { useCanvas } from '../context/CanvasContext'

const ToolSelector = () => {
 const { clearCanvas } = useCanvas();

  return (
    <div className="tool-selector">
      <div className="selector-top">
        <button className="tool-btn" id="paint" />
        <button className="tool-btn" id="bigger" />
        <button className="tool-btn" id="smaller" />
      </div>
      <div className="selector-bottom">
        <button className="tool-btn" id="erase" />
        <button className="tool-btn" id="contrast" />
        <button className="tool-btn" id="trash" onClick={() => clearCanvas()}/>
      </div>
    </div>
  )
}

export default ToolSelector