import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Greeting />} />
  </Routes>
);

export default App;
