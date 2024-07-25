// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Map from './components/Map';
import ReportSightings from './components/ReportSightings';
import Search from './components/Search';
import Signup from './components/Signup';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/map" element={<Map />} />
      <Route path="/report-sightings" element={<ReportSightings />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;
