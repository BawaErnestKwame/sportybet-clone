import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

const App = () => {
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
          <Route path="/profile" element={<Profile/>} />
        </Routes>

        <BottomNavbar />
      </div>
    </div>
  );
};

export default App;
