import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/" element={<Navbar />}/>
      </Routes>
    </Router>
  );
}

export default App;
