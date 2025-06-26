import React, { useState } from 'react';
import Sports from '../../Components/LiveBet/Sports'; // Ensure this path is correct!

const sports = [
  'Football', 'Basketball', 'Tennis', 'Table Tennis', 'Volleyball',
  'Handball', 'Cricket', 'Badminton', 'Baseball', 'Futsal',
  'eBasketball', 'eFootball'
];

const betTypes = [
  '1X2', 'O/U', 'DC', '1st Half O/U', 'Handicap',
  'Home O/U', 'Away O/U'
];

const LiveBet = () => {
  const [activeSport, setActiveSport] = useState('Football');
  const [activeBet, setActiveBet] = useState('1X2');

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900">
        {/* Header */}
        <div className="px-4 py-3 sticky top-0 z-20 bg-gray-900 shadow-sm">
          <h1 className="text-white text-2xl font-bold">LIVE</h1>
        </div>

        {/* Scrollable Sports Tabs */}
        <div className="w-full overflow-x-auto scroll-hide border-b border-gray-800">
          <ul className="flex gap-2 px-4 py-2 whitespace-nowrap">
            {sports.map((sport) => (
              <li
                key={sport}
                onClick={() => setActiveSport(sport)}
                className={`cursor-pointer px-4 py-1.5 text-sm rounded-full transition ${
                  activeSport === sport
                    ? 'bg-white text-green-700 font-semibold'
                    : 'text-white'
                }`}
              >
                {sport}
              </li>
            ))}
          </ul>
        </div>

        {/* Bet Types */}
        <div className="w-full overflow-x-auto scroll-hide">
          <ul className="flex gap-2 px-4 py-2 whitespace-nowrap">
            {betTypes.map((bet) => (
              <li
                key={bet}
                onClick={() => setActiveBet(bet)}
                className={`cursor-pointer px-4 py-1 text-sm transition ${
                  activeBet === bet
                    ? 'text-white underline decoration-4 underline-offset-8 decoration-green-500'
                    : 'text-gray-400'
                }`}
              >
                {bet}
              </li>
            ))}
          </ul>
        </div>

        {/* Match Indicators */}
        <div className="bg-gray-700 h-8 flex justify-end items-center px-8 text-xs text-gray-400 gap-16">
          <span>1</span>
          <span>X</span>
          <span>2</span>
        </div>

        {/* Live Match Info */}
        <div className="p-6 text-center text-gray-300">
          <p className="text-sm">Showing live matches for:</p>
          <p className="text-lg font-semibold text-white mt-1">
            {activeSport} - {activeBet}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Live matches and odds will appear here.
          </p>
        </div>
      </div>

      {/* Sports Grid */}
      <Sports />
    </>
  );
};

export default LiveBet;
