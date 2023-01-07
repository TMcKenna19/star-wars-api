import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  return (
    <div className="App container">
      <SearchBar/>
      <Routes>
        <Route path="results/:category/:id" element={<Results/>} />
        {/* <Route path="/" element={<SearchBar/>} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
