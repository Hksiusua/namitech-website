import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import OverView from '../pages/overviews';
import Products from '../pages/products';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<OverView />} />  
      <Route path="/about" element={<Products />} />  
    </Routes>
  );
}

export default AppRouter;
