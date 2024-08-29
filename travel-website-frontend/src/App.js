import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AddAdventures from './components/pages/AddAdventures';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/add-adventure' element={<AddAdventures />} />
      </Routes>
    </Router>
  );
}

export default App;
