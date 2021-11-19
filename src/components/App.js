import '../styles/App.scss';
import './CanvasContainer'
import { Route } from 'react-router-dom';
import MusicContainer from './MusicContainer'
import CanvasContainer from './CanvasContainer';

function App() {
  return (
    <div className="App">
      {/* <MusicContainer /> */}
      <CanvasContainer />
    </div>
  );
}

export default App;
