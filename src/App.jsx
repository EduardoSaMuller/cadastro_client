import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MyAccount from "./pages/Sobre"
import './App.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/minha_conta" element={<MyAccount/>} />
    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
