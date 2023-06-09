import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import StartUps from './components/StartUps/StartUps';
import './App.css';



function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/startup" element={<StartUps />} />
          </Routes>
        </Router>  
      </div>
    </>
  );
}

export default App;
