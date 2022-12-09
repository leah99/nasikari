import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
          {/* <Route path="/Menu" element={<MenuPage />} /> */}
        </Routes>
    </HashRouter>
  );
}

export default App;