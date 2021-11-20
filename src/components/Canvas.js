import React, { useContext, useEffect }from 'react'
import '../styles/Canvas.scss'
import { useCanvas, CanvasContext } from '../context/CanvasContext'


const Canvas = () => {
 const { prepareCanvas, contextRef, canvasRef, startDrawing, finishDrawing, draw, paintColor } = useCanvas();

 useEffect(() => {
   prepareCanvas();
 }, [paintColor])

  return (
   <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
}

export default Canvas