import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Form from './components/Form';
import FormValidate from './components/FormValidate';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/formvalidate" element={<FormValidate />}/>
      </Routes>
    </Router>
  );
}

export default App;
