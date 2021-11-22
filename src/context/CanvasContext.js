import React, {useRef, useState, useContext } from 'react'

const CanvasContext = React.createContext();

export const CanvasContextProvider = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false)
  const paintRef = useRef('black')
  const [sizeSliderHidden, setSliderHidden] = useState(true)
  const [sliderValueState, setSliderValueState] = useState(10)
  const [activePalette, setActivePalette] = useState({
    isFireActive: true,
    isLeafActive: false,
    isWaveActive: false,
    isMoonActive: false,
    isCustomActive: false
  });

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = paintRef;
    context.lineWidth = sliderValueState;
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

  const handleSetColor = (event) => {
    event.preventDefault(); 
    paintRef.current = event.target.dataset.color;
    contextRef.current.strokeStyle = paintRef.current
  }

  const toggleSlider = () => {
    if(sizeSliderHidden === true) {
      setSliderHidden(false)
      console.log(sizeSliderHidden)
    } else {
      setSliderHidden(true)
      console.log(sizeSliderHidden)
    }
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
        clearCanvas,
        handleSetColor,
        activePalette,
        setActivePalette,
        toggleSlider,
        sizeSliderHidden,
        setSliderHidden,
        paintRef,
        setSliderValueState
      }}>
        {props.children}
      </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext);
