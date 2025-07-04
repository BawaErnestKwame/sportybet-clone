import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StreamIcon from '@mui/icons-material/Stream';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

const AzMenu = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes('promotion')
    ? 'promotion'
    : location.pathname.includes('live')
    ? 'live'
    : 'sports'; // default

  return (
    <>
      <div className="fixed top-0 w-full z-50 max-w-[768px]">
        {/* Red Header */}
        <div className="bg-red-600 w-full pb-4">
          {/* Search */}
          <div className="w-full px-4 pt-4">
            <div className="flex bg-white gap-3 rounded px-3 py-2">
              <SearchIcon className="text-gray-500" />
              <input
                type="text"
                placeholder="Teams/Player, Leagues, Games ID"
                className="outline-none border-0 w-full text-sm tracking-wide"
              />
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-between px-4 border-t-[0.5px] border-t-gray-600 mt-2 py-1 font-medium">
            <div className="flex flex-col items-center text-white text-sm tracking-wide">
              <DeviceHubIcon />
              <span>Load Code</span>
            </div>
            <div className="flex flex-col items-center text-white text-sm tracking-wide">
              <StreamIcon />
              <span>Virtuals</span>
            </div>
            <div className="flex flex-col items-center text-white text-sm tracking-wide">
              <EmojiEventsIcon />
              <span>Jackpot</span>
            </div>
            <div className="flex flex-col items-center text-white text-sm tracking-wide">
              <CreditScoreIcon />
              <span>Livescore</span>
            </div>
            <div className="flex flex-col items-center text-white text-sm tracking-wide">
              <SportsScoreIcon />
              <span>Results</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-between text-sm text-gray-500 font-medium py-1 px-4 border-b border-gray-300">
          <Link to="/azmenu/azsports">
            <span
              className={`cursor-pointer tracking-wide ${
                activeTab === 'sports'
                  ? 'text-green-600 underline decoration-3 underline-offset-8'
                  : ''
              }`}
            >
              Sports
            </span>
          </Link>

          <Link to="/azmenu/live">
            <span
              className={`cursor-pointer tracking-wide ${
                activeTab === 'live'
                  ? 'text-green-600 underline decoration-3 underline-offset-8'
                  : ''
              }`}
            >
              Live (122)
            </span>
          </Link>

          <Link to="/azmenu/promotion">
            <span
              className={`cursor-pointer tracking-wide ${
                activeTab === 'promotion'
                  ? 'text-green-600 underline decoration-3 underline-offset-16'
                  : ''
              }`}
            >
              Promotion (14)
            </span>
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <Outlet />
    </>
  );
};

export default AzMenu;
