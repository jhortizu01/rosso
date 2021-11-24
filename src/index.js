import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { CanvasContextProvider } from "./context/CanvasContext";


ReactDOM.render(
  <BrowserRouter>
    <CanvasContextProvider>
        <App />
    </CanvasContextProvider>
  </BrowserRouter>, document.getElementById('root')
);
