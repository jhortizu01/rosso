import React, {useRef, useState, useContext } from 'react'

const CanvasContext = React.createContext();

export const CanvasContextProvider = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

   const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <CanvasContext.Provider 
      value={{
        prepareCanvas,
        contextRef,
        canvasRef,
        startDrawing,
        finishDrawing,
        draw,
        clearCanvas
      }}>
        {props.children}
      </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext);
