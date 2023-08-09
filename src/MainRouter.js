import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import CharactersPage from './components/CharactersPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<CharactersPage />} />
    </Routes>
  )
}


export default MainRoutes