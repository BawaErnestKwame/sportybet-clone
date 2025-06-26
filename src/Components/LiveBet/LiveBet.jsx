import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sports from "../../Components/LiveBet/Sports"; 


const sports = [
  'Football', 'Basketball', 'Tennis', 'Table Tennis', 'Volleyball',
  'Handball', 'Cricket', 'Badminton', 'Baseball', 'Futsal',
  'eBasketball', 'eFootball',
];

const betTypes = [
  '1X2', 'O/U', 'DC', '1st Half O/U', 'Handicap',
  'Home O/U', 'Away O/U'
];

const LiveBet = () => {
  const [activeSport, setActiveSport] = useState('Football');
  const [activeBet, setActiveBet] = useState('1X2');
  return(

    <>
    <div className="w-full min-h-screen bg-gray-900">
      {/* Top Header */}
      <div className=" flex">
      <div className="sticky top-0 z-20  px-4 py-3 shadow-sm">
        <h1 className="text-white text-2xl font-bold">LIVE</h1>
      </div>

      {/* Scrollable Sports Tabs */}
      <div className="w-full overflow-x-auto scroll-hide">
        <ul className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {sports.map((sport) => (
            <li
              key={sport}
              onClick={() => setActiveSport(sport)}
              className={`cursor-pointer px-4 py-1.5 text-sm   ${
                activeSport === sport
                  ? '  text-green-700'
                  : ' text-white '
              }`}
            >
              {sport}
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* Scrollable Bet Types */}
      <div className="w-full overflow-x-auto scroll-hide">
        <ul className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {betTypes.map((bet) => (
            <li
              key={bet}
              onClick={() => setActiveBet(bet)}
              className={`cursor-pointer px-4 py-1 text-sm ${
                activeBet === bet
                  ? ' text-white underline decoration-4 underline-offset-12 decoration-green-600'
                  : ' text-gray-50'
              }`}
            >
              {bet}
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-gray-700 h-8 w-full pr-8">

        <span className='flex gap-16 text-gray-400 justify-end text-xs'>
            <p>1</p>
            <p>x</p>
            <p>2</p>
        </span>
      </div>

      {/* Placeholder for Live Match Listings */}
      <div className="p-4 text-gray-600 text-center">
        <p>Showing live matches for:</p>
        <p className="font-semibold text-lg">{activeSport} - {activeBet}</p>
        <p className="mt-4 text-sm text-gray-400">Live matches and odds will appear here.</p>
      </div>

    </div>
    <Sports/>

    </>
  );
};

export default LiveBet;
