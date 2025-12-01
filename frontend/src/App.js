import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/User Dashboard/Order.js';
import Cart from './pages/User Dashboard/Cart';
import DesignWithAI from './pages/User Dashboard/DesignWithAI';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import AdminDashboard from './pages/Admin Dashboard/AdminDashboard.js';
import Profile from './pages/User Dashboard/Profile.js';
import SettingsPage from './pages/User Dashboard/SettingsPage.js';
import Dashboard from './pages/User Dashboard/Dashboard.js';
import HomePage from './pages/HomePage.js';

function App() {  
  return (
    <>
      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/design' element={<DesignWithAI />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

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
