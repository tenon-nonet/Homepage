import React from 'react';
import ReactDOM from 'react-dom/client';
import HOME from './pages/home';
import PROFILE from './pages/profile';
import PLAYGROUND from './pages/playground';
import APPLICATION from './pages/application';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/profile" element={
        <PROFILE />
      } />
      <Route path="/playground" element={
        <PLAYGROUND />
      } />
      <Route path="/application" element={
        <APPLICATION />
      } />
      <Route path="/*" element={
        <HOME />
      } />
    </Routes>
  </BrowserRouter>
);


