import React from "react";
import "./App.scss";
import About from "./About/About"
import Experience from "./Experience/Experience";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact/ContactPage'
import HomePage from "./Home/HomePage";
import Resume from './Pages/Resume/ResumePage'
import Starfield from 'react-starfield';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="starfieldContainer">
          <Starfield
            starCount={5000}
            starColor={[255, 255, 255]}
            speedFactor={0.01}
            backgroundColor="black"
          />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element = {<Resume/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
