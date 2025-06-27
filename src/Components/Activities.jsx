import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import LiveBet from '../Components/LiveBet/LiveBet';

const Activities = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.endsWith(path);

  // Scrollable boxes with dynamic colors
  const competitions = [
    { label: "TODAY'S\nFOOTBALL", color: 'border-red-700' },
    { label: "FOOTBALL IN\nNEXT 3\nHOURS", color: 'border-purple-800' },
    { label: "FIFA CLUB\nWORLD CUP", color: 'border-green-700' },
    { label: "CONCACAF\nGOLD CUP", color: 'border-black-500' },
    { label: "U21 EUROS", color: 'border-red-600' },
    { label: "ATP/WTA", color: 'border-purple-700' },
    { label: "FIVB NATIONS\nLEAGUE", color: 'border-green-700' },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Top Icon Tabs */}
      <div className="flex justify-between gap-6 px-8 whitespace-nowrap py-4 overflow-x-auto bg-white border-b border-gray-200 scroll-hide">
        {[
          { icon: <AcUnitSharpIcon />, label: 'All Sports' },
          { icon: <LiveTvIcon />, label: 'Live' },
          { icon: <Groups2SharpIcon />, label: 'Sporty Hero' },
          { icon: <FlightTakeoffIcon />, label: 'Aviator' },
          { icon: <SportsVolleyballIcon />, label: 'Virtual' },
          { icon: <MoreHorizIcon />, label: 'More' },
        ].map(({ icon, label }, idx) => (
          <div key={idx} className="flex flex-col items-center text-xs text-gray-700">
            {icon}
            <span className="mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* Scrollable Competitions with Colored Borders */}
      <div className="flex overflow-x-auto gap-3 px-4 py-3 scroll-hide bg-gray-50">
        {competitions.map(({ label, color }, idx) => (
          <div
            key={idx}
            className={`min-w-[130px] bg-white shadow-md border-t-3 ${color} rounded-md py-2 px-3 text-xs font-medium text-gray-700 leading-tight whitespace-pre-line hover:shadow-lg transition duration-200`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-y border-gray-200">
        <h1 className="font-bold text-sm text-gray-800 whitespace-nowrap">Featured</h1>
        <div className="flex-1 overflow-x-auto ml-4 scroll-hide">
          <ul className="flex gap-5 text-sm whitespace-nowrap">
            {['matches', 'game', 'codes', 'virtuals'].map((tab) => (
              <li key={tab}>
                <Link
                  to={tab}
                  className={`${
                    isActive(tab) ? 'text-green-700 font-semibold' : 'text-gray-600'
                  } hover:text-green-600`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-green-700 ml-2">
          <LiveTvIcon fontSize="small" />
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="">
        <Outlet />
      </div>

      {/* LiveBet Component */}
      <LiveBet />
    </div>
  );
};

export default Activities;
