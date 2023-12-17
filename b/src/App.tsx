// App.js

import React from 'react';
import { BrowserRouter, Route, Path,Routes } from 'react-router-dom';
import './App.css';
import Header from './navi/nav';
import Board from './main/board';
import AboutGame from './About_game/About_game';
import About_Baghchal from './About_Baghchal/About_Baghchal';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/About_game" element={<AboutGame />} />
          <Route path="/About_Baghchal" element={<About_Baghchal />} />
       
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
