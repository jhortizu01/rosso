import '../styles/App.scss';
import CanvasContainer from './CanvasContainer'
import MusicContainer from './MusicContainer'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <MusicContainer /> */}
      <CanvasContainer />
    </div>
  );
}

export default App;
