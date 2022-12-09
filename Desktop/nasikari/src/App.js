import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage, MenuPage, ContactPage } from './pages';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;