import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Membership from './pages/Membership';
import BookClass from './pages/BookClass';
import OurTrainer from './pages/OurTrainer';
import Locations from './pages/Locations';
import Events from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/book-a-class" element={<BookClass />} />
          <Route path="/our-trainer" element={<OurTrainer />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
