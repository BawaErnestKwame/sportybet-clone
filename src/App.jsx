import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Activities from './Components/Activities';
import BottomNavbar from './BottomNavbar';
import BackgroundSlide from './Components/BackgroundSlide';

import Home from './Pages/Home';
import AzMenu from './Pages/AzMenu';
import Me from './Pages/Me';
import OpenBet from './Pages/OpenBet';

import Profile from './Components/Profile';
import Deposit from './Deposit/Deposit'; 
import HowToDeposit from './Deposit/HowToDeposit';
import MobileMoney from './Deposit/MobileMoney';
import Paybill from './Deposit/Paybill';
import Card from './Deposit/Card';
import Matches from './Components/HompageActivities/Matches';
import Virtual from './Components/HompageActivities/Virtual';
import Codes from './Components/HompageActivities/Codes';
import Game from './Components/HompageActivities/Game';

const App = () => {
  const location = useLocation();

  const hideBottomNav =
    location.pathname.toLowerCase().startsWith('/deposit') ||
    location.pathname.toLowerCase() === '/howtodeposit';

  return (
    <div className="flex justify-center items-center h-full bg-gray-600">
      <div className="max-w-[768px] w-full h-full bg-white shadow-xl overflow-hidden">
        <Navbar />
        <BackgroundSlide />

        <Routes>
          {/* Tab Layout: Activities is parent */}
          <Route path="/" element={<Activities />}>
            <Route index element={<Home />} /> {/* Default tab content */}
            <Route index element={<Matches to="Matches" replace/>} />
            <Route path="games" element={<Game/>} />
            <Route path="codes" element={<Codes/>} />
            <Route path="virtuals" element={<Virtual/>} />
          </Route>

          {/* Other Main Routes */}
          <Route path="/azmenu" element={<AzMenu />} />
          <Route path="/open-bet" element={<OpenBet />} />
          <Route path="/me" element={<Me />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/howtodeposit" element={<HowToDeposit />} />

          {/* Nested Deposit Routes */}
          <Route path="/deposit" element={<Deposit />}>
            <Route index element={<Navigate to="mobile-money" replace />} />
            <Route path="mobile-money" element={<MobileMoney />} />
            <Route path="paybill" element={<Paybill />} />
            <Route path="card" element={<Card />} />
          </Route>
        </Routes>

        {!hideBottomNav && <BottomNavbar />}
      </div>
    </div>
  );
};

export default App;
