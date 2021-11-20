import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { CanvasContextProvider } from "./context/CanvasContext";


ReactDOM.render(
    <CanvasContextProvider>
        <App />
    </CanvasContextProvider>, document.getElementById('root')
);
