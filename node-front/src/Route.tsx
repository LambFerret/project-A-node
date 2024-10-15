// src/Route.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import BulletinBoard from './pages/BulletinBoard/BulletinBoard';
import Login from './pages/Login/Login';
import Monitoring from './pages/Monitoring/Monitoring';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/bulletin-board" element={<BulletinBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/monitoring" element={<Monitoring />} />
    </Routes>
  );
};

export default AppRoutes;