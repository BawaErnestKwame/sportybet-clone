import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import BottomNavbar from './BottomNavbar';
import BackgroundSlide from './Components/BackgroundSlide';
import Activities from './Components/Activities';

// Pages
import Home from './Pages/Home';
import AzMenu from './Pages/AzMenu';
import Me from './Pages/Me';
import OpenBet from './Pages/OpenBet';
import GamePlay from './Pages/GamePlay';


// Sub Components / Sections
import Profile from './Components/Profile';
import Deposit from './Deposit/Deposit';
import HowToDeposit from './Deposit/HowToDeposit';
import MobileMoney from './Deposit/MobileMoney';
import Paybill from './Deposit/Paybill';
import Card from './Deposit/Card';

// Homepage Activities
import Matches from './Components/HompageActivities/Matches';
import Virtual from './Components/HompageActivities/Virtual';
import Codes from './Components/HompageActivities/Codes';
import Game from './Components/HompageActivities/Game';


const App = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // ✅ Show header (Navbar & BackgroundSlide) only on Activities pages
  const showHeader =
    path === '/' ||
    path.startsWith('/matches') ||
    path.startsWith('/game') ||
    path.startsWith('/codes') ||
    path.startsWith('/virtuals');

  // ✅ Hide bottom nav only on deposit pages
  const hideBottomNav =
    path.startsWith('/deposit') || path === '/howtodeposit';

  return (
    <div className="flex justify-center items-center h-auto bg-gray-600">
      <div className="max-w-[768px] w-full h-auto bg-white shadow-xl overflow-hidden">

        {showHeader && <Navbar />}
        {showHeader && <BackgroundSlide />}

        <Routes>
          {/* Tab Layout: Activities is parent */}
          <Route path="/" element={<Activities />}>
            <Route index element={<Navigate to="matches" replace />} />
            <Route path="matches" element={<Matches />} />
            <Route path="games" element={<Game />} />
            <Route path="codes" element={<Codes />} />
            <Route path="virtuals" element={<Virtual />} />
          </Route>

          {/* Other main pages */}
          <Route path="/gameplay" element={<GamePlay />} />
          <Route path="/azmenu" element={<AzMenu />} />
          <Route path="/open-bet" element={<OpenBet />} />
          <Route path="/me" element={<Me />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/howtodeposit" element={<HowToDeposit />} />

          {/* Deposit section with nested routes */}
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
