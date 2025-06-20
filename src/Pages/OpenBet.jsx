import React, { useState } from 'react';
import profile from '../assets/image.jpg';
import { Link } from 'react-router-dom';

const OpenBet = () => {
  const [active, setActive] = useState('Open Bets');

  return (
    <div className="bg-gray-800 px-4 pt-6 w-full">
      {/* Header Section */}
      <Link to='/Me'>
            <div className="flex justify-end gap-2">
        <img
          src={profile}
          alt="Profile"
          className="w-6 h-6 rounded-full border border-gray-100"
        />
        <span className="text-sm text-yellow-300">GHS 0.00</span>
      </div>
      
      </Link>


      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => setActive('Open Bets')}
          className={`px-6 py-2 text-sm rounded-t 
            ${active === 'Open Bets' 
              ? 'bg-white text-gray-900 font-semibold' 
              : 'bg-gray-700 text-white'}
          `}
        >
          Open Bets
        </button>

        <button
          onClick={() => setActive('Bet History')}
          className={`px-6 py-2 text-sm rounded-t
            ${active === 'Bet History' 
              ? 'bg-white text-gray-900 font-semibold' 
              : 'bg-gray-700 text-white'}
          `}
        >
          Bet History
        </button>
      </div>
    </div>
  );
};

export default OpenBet;
