import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import './App.css';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
  
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
