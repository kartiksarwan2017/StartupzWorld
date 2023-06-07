import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
          </Routes>
        </Router>  
      </div>
    </>
  );
}

export default App;
