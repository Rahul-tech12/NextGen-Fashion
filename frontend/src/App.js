import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/User Dashboard/Home.js';
import Order from './pages/User Dashboard/Order.js';
import Cart from './pages/User Dashboard/Cart';
import DesignWithAI from './pages/User Dashboard/DesignWithAI';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import AdminDashboard from './pages/Admin Dashboard/AdminDashboard.js';

function App() {  
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/design' element={<DesignWithAI />} />

        {/* Authentication */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Admin dashboard */}
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
