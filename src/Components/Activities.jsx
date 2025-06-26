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
  const isAtRoot = location.pathname === '/';

  return (
    <>
      {/* Icon Tabs */}
      <div className="w-full flex gap-4 text-sm py-4">
        <div className="flex flex-col items-center text-xs"><AcUnitSharpIcon /><h1>All Sports</h1></div>
        <div className="flex flex-col items-center text-xs"><LiveTvIcon /><h1>Live</h1></div>
        <div className="flex flex-col items-center text-xs"><Groups2SharpIcon /><h1>Sporty Hero</h1></div>
        <div className="flex flex-col items-center text-xs"><FlightTakeoffIcon /><h1>Aviator</h1></div>
        <div className="flex flex-col items-center text-xs"><SportsVolleyballIcon /><h1>Virtual</h1></div>
        <div className="flex flex-col items-center text-xs"><MoreHorizIcon /><h1>More</h1></div>
      </div>

      {/* Scroll Menu */}
      <div className="flex overflow-x-auto gap-2 px-2 py-2 snap-x snap-mandatory scroll-hide">
        {/* Your scroll menu logic */}
      </div>

      {/* Navigation Tabs */}
      <div className="flex text-sm text-gray-800 items-center px-4 justify-between w-full bg-white py-2 border-b border-gray-300 overflow-hidden">
        <h1 className="font-bold whitespace-nowrap mr-2">Featured</h1>
        <div className="flex-1 overflow-x-auto scroll-hide">
          <ul className="flex gap-4 snap-x snap-mandatory whitespace-nowrap">
            <li className="snap-start">
              <Link to="matches" className={isActive('matches') ? 'text-green-700 font-semibold' : ''}>Matches</Link>
            </li>
            <li className="snap-start">
              <Link to="game" className={isActive('game') ? 'text-green-700 font-semibold' : ''}>Games</Link>
            </li>
            <li className="snap-start">
              <Link to="codes" className={isActive('codes') ? 'text-green-700 font-semibold' : ''}>Codes</Link>
            </li>
            <li className="snap-start">
              <Link to="virtuals" className={isActive('virtuals') ? 'text-green-700 font-semibold' : ''}>Virtuals</Link>
            </li>
          </ul>
        </div>
        <div className="text-green-700 ml-2"><LiveTvIcon /></div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        <Outlet />
      </div>

      {/* ✅ Show LiveBet ONLY when at root of Activities */}
       <LiveBet />
    </>
  );
};

export default Activities;
