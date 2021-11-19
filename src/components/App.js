import logo from './logo.svg';
import '../styles/App.css';
import './CanvasContainer'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MusicContainer />
      <CanvasContainer />
    </div>
  );
}

export default App;
