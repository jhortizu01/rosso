import React, { useEffect }from 'react'
import '../styles/Canvas.scss'
import { useCanvas } from '../context/CanvasContext'


const Canvas = () => {
 const { prepareCanvas, canvasRef, startDrawing, finishDrawing, draw } = useCanvas();

 useEffect(() => {
   prepareCanvas();
 }, [])

  return (
   <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      onMouseLeave={finishDrawing}
      ref={canvasRef}
    />
  )
}

export default Canvas