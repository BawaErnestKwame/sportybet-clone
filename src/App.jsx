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
import Games from './Pages/Games';
import Profile from './Components/Profile';
import Deposit from './Deposit/Deposit'; 
import HowToDeposit from './Deposit/HowToDeposit';
import MobileMoney from './Deposit/MobileMoney';
import Paybill from './Deposit/Paybill';
import Card from './Deposit/Card';

const App = () => {
  const location = useLocation();

  const hideBottomNav =
    location.pathname.toLowerCase().startsWith('/deposit') ||
    location.pathname.toLowerCase() === '/howtodeposit';

   return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="max-w-[375px] w-full min-h-screen bg-white shadow-xl overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <BackgroundSlide />
                <Activities />
                <Home />
              </>
            }
          />
          <Route path="/azmenu" element={<AzMenu />} />
          <Route path="/games" element={<Games />} />
          <Route path="/open-bet" element={<OpenBet />} />
          <Route path="/me" element={<Me />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/howtodeposit" element={<HowToDeposit />} />

          {/* Nested Deposit Routes */}
          <Route path="/deposit" element={<Deposit />}>
          <Route index element={<Navigate to="mobile-money" replace />} />
            <Route path="mobile-money" index element={<MobileMoney />} />
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
