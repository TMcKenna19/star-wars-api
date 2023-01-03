import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  return (
    <div className="App container">
      <h2>Star Wars API</h2>
      
      <Routes>
        <Route path="/results" element={<Results/>} />
        <Route path="/" element={<SearchBar/>} />
      </Routes>
      
    </div>
  );
}

export default App;
