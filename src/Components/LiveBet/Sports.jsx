import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const sports = [
  'Football', 'Basketball', 'Tennis', 'Table Tennis', 'Volleyball',
  'Handball', 'Cricket', 'Badminton', 'Baseball', 'Futsal',
  'eBasketball', 'eFootball', 'Ice Hockey',
];

const betTypes = [
  '1X2', 'O/U', 'DC', '1st Half O/U', 'Handicap',
  'Home O/U', 'Away O/U'
];

const sampleMatches = {
  Football: ['Chelsea vs Man Utd', 'Barcelona vs Real Madrid'],
  Basketball: ['Lakers vs Celtics', 'Warriors vs Bulls'],
  Tennis: ['Nadal vs Djokovic', 'Alcaraz vs Medvedev'],
  Volleyball: ['USA vs Brazil', 'Italy vs France'],
};

const Sports = () => {
  const [activeSport, setActiveSport] = useState('Football');
  const [activeFilter, setActiveFilter] = useState('Today');
  const [activeBet, setActiveBet] = useState('1X2');

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Sticky Sports Header */}
      <div className="flex items-center sticky top-0 z-20 bg-gray-50 px-4 py-3">
        <h2 className="text-gray-700 text-xl font-bold mr-4 border-r pr-3 border-gray-200">SPORTS</h2>

        {/* Scrollable Sports Tabs */}
        <div className="w-full overflow-x-auto scroll-hide">
          <ul className="flex gap-2 whitespace-nowrap">
            {sports.map((sport) => (
              <li
                key={sport}
                onClick={() => setActiveSport(sport)}
                className={`cursor-pointer px-4 py-1.5 text-sm rounded-md transition ${
                  activeSport === sport
                    ? ' text-green-700 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {sport}
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Scroll Arrow */}
        <div className="ml-2 text-gray-700 border border-gray-500 px-1">
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="w-full overflow-x-auto scroll-hide border-b border-gray-300 pb-0.5">
        <ul className="flex gap-4 px-4 py-2 whitespace-nowrap justify-center">
          {['Highlights', 'Today', 'Countries'].map((filter) => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer text-sm ${
                activeFilter === filter
                  ? 'text-green-600 underline decoration-4 underline-offset-13 decoration-green-500'
                  : 'text-gray-700'
              }`}
            >
              {filter}
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
              className={`cursor-pointer text-sm px-4 py-1 rounded transition ${
                activeBet === bet
                  ? 'text-green-600'
                  : 'text-gray-600 '
              }`}
            >
              {bet}
            </li>
          ))}
        </ul>
      </div>

      {/* Match Listing Section */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          {activeSport} - {activeFilter} - {activeBet}
        </h3>

        <div className="grid gap-3">
          {(sampleMatches[activeSport] || []).map((match, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg px-4 py-3 flex justify-between items-center hover:bg-gray-700"
            >
              <span>{match}</span>
              <button className="bg-green-600 text-white px-3 py-1 text-sm rounded-full hover:bg-green-700">
                Bet
              </button>
            </div>
          ))}

          {!(sampleMatches[activeSport]?.length) && (
            <p className="text-sm text-gray-400 text-center mt-4">No matches available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sports;
