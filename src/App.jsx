import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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

// Sub Components
import Profile from './Components/Profile';
import Deposit from './Deposit/Deposit';
import HowToDeposit from './Deposit/HowToDeposit';
import MobileMoney from './Deposit/MobileMoney';
import Paybill from './Deposit/Paybill';
import Card from './Deposit/Card';

// Activities Subpages
import Matches from './Components/HompageActivities/Matches';
import Virtual from './Components/HompageActivities/Virtual';
import Codes from './Components/HompageActivities/Codes';
import Game from './Components/HompageActivities/Game';

const App = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const showHeader =
    path === '/' ||
    path.startsWith('/matches') ||
    path.startsWith('/game') ||
    path.startsWith('/codes') ||
    path.startsWith('/virtuals');

  const hideBottomNav =
    path.startsWith('/deposit') || path === '/howtodeposit';

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.25 }
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gray-600">
      <div className="max-w-[768px] w-full h-auto bg-white shadow-xl overflow-hidden">
        {showHeader && <Navbar />}
        {showHeader && <BackgroundSlide />}

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Activities Layout */}
            <Route path="/" element={
              <motion.div {...pageTransition}>
                <Activities />
              </motion.div>
            }>
              <Route index element={<Navigate to="matches" replace />} />
              <Route path="matches" element={<motion.div {...pageTransition}><Matches /></motion.div>} />
              <Route path="games" element={<motion.div {...pageTransition}><Game /></motion.div>} />
              <Route path="codes" element={<motion.div {...pageTransition}><Codes /></motion.div>} />
              <Route path="virtuals" element={<motion.div {...pageTransition}><Virtual /></motion.div>} />
            </Route>

            {/* Standalone Pages */}
            <Route path="/gameplay" element={<motion.div {...pageTransition}><GamePlay /></motion.div>} />
            <Route path="/azmenu" element={<motion.div {...pageTransition}><AzMenu /></motion.div>} />
            <Route path="/open-bet" element={<motion.div {...pageTransition}><OpenBet /></motion.div>} />
            <Route path="/me" element={<motion.div {...pageTransition}><Me /></motion.div>} />
            <Route path="/profile" element={<motion.div {...pageTransition}><Profile /></motion.div>} />
            <Route path="/howtodeposit" element={<motion.div {...pageTransition}><HowToDeposit /></motion.div>} />

            {/* Deposit with Nested Routes */}
            <Route path="/deposit" element={<motion.div {...pageTransition}><Deposit /></motion.div>}>
              <Route index element={<Navigate to="mobile-money" replace />} />
              <Route path="mobile-money" element={<motion.div {...pageTransition}><MobileMoney /></motion.div>} />
              <Route path="paybill" element={<motion.div {...pageTransition}><Paybill /></motion.div>} />
              <Route path="card" element={<motion.div {...pageTransition}><Card /></motion.div>} />
            </Route>
          </Routes>
        </AnimatePresence>

        {!hideBottomNav && <BottomNavbar />}
      </div>
    </div>
  );
};

export default App;
