import './App.css';
import {Routes, Route} from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <h2>Star Wars API</h2>
      <Routes>
        <Route path="/people/" element={<People/>} />
        <Route path="/planets/" element={<Planets/>} />
      </Routes>
      
    </div>
  );
}

export default App;
