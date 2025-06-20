import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StreamIcon from '@mui/icons-material/Stream';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

const AzMenu = () => {
  const [activeTab, setActiveTab] = useState('sports');

  return (
    <>
      <div className='bg-red-600 w-full pb-4'>
        {/* Search input */}
        <div className="w-full px-4 pt-4">
          <div className="flex bg-white gap-3 rounded px-3 py-2">
            <SearchIcon className='text-gray-500' />
            <input
              type="text"
              placeholder='Teams/Player, Leagues, Games ID'
              className='outline-none border-0 w-full text-sm tracking-wide'
            />
          </div>
        </div>

        {/* Activities icons */}
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

      {/* Sports | Live | Promotion tabs */}
      <div className="flex justify-between text-sm text-gray-400 font-medium py-3 px-4 border-b border-gray-300">
        <span
          onClick={() => setActiveTab('sports')}
          className={`cursor-pointer tracking-wide ${
            activeTab === 'sports' ? 'text-green-600 underline decoration-3 underline-offset-16 ' : ''
          }`}
        >
          Sports
        </span>

        <span
          onClick={() => setActiveTab('live')}
          className={`cursor-pointer tracking-wide ${
            activeTab === 'live' ? 'text-green-600 underline decoration-3  underline-offset-16 ' : ''
          }`}
        >
          Live (122)
        </span>

        <span
          onClick={() => setActiveTab('promotion')}
          className={`cursor-pointer tracking-wide ${
            activeTab === 'promotion' ? 'text-green-600 underline decoration-3 underline-offset-16 ' : ''
          }`}
        >
          Promotion (14)
        </span>
      </div>
    </>
  );
};

export default AzMenu;
