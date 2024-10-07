import {React, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Home, Checkout, Menu, Item, Cart } from './pages';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
