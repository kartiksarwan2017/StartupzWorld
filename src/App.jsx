import {Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import StartUps from './components/StartUps/StartUps';
import Investors from './components/Investors/Investors';
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <Header />
    <Routes>
       
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/startup" element={<StartUps />} />
          <Route exact path="/investor" element={<Investors />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
       
    </Routes>
    <Footer />
      </div>
    </>
  );
}

export default App;
