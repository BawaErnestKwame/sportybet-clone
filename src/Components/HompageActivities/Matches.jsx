import React from 'react';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link, Outlet } from 'react-router-dom'; // ✅ Import Outlet

const Matches = () => {
  const leagues = [
    { label: 'FIFA Club World Cup', icon: <SensorOccupiedIcon fontSize="small" /> },
    { label: 'UEFA Champions', icon: <EmojiEventsIcon fontSize="small" /> },
    { label: 'Premier League', icon: <EmojiEventsIcon fontSize="small" /> },
    { label: 'La Liga', icon: <EmojiEventsIcon fontSize="small" /> },
    { label: 'Serie A', icon: <EmojiEventsIcon fontSize="small" /> },
  ];

  const matches = [
    {
      league: 'Germany - BBL',
      home: 'Ratiopharm Ulm',
      away: 'Bayern Munich',
      time: '6:00 PM',
      day: 'Today',
      odds: { home: '2.20', away: '1.77' },
    },
    {
      league: 'Spain - ACB',
      home: 'Real Madrid',
      away: 'Barcelona',
      time: '7:30 PM',
      day: 'Today',
      odds: { home: '1.90', away: '2.10' },
    },
    {
      league: 'Italy - Serie A',
      home: 'Virtus Bologna',
      away: 'Olimpia Milano',
      time: '5:45 PM',
      day: 'Today',
      odds: { home: '2.00', away: '1.80' },
    },
    {
      league: 'USA - NBA',
      home: 'Lakers',
      away: 'Celtics',
      time: '8:00 PM',
      day: 'Today',
      odds: { home: '2.30', away: '1.60' },
    },
    {
      league: 'France - Pro A',
      home: 'ASVEL',
      away: 'Monaco',
      time: '4:00 PM',
      day: 'Today',
      odds: { home: '2.15', away: '1.85' },
    },
    {
      league: 'Turkey - BSL',
      home: 'Fenerbahçe',
      away: 'Efes',
      time: '6:15 PM',
      day: 'Today',
      odds: { home: '2.25', away: '1.70' },
    },
  ];

  return (
    <div className="space-y-4 p-4 bg-gray-50">
      {/* Scrollable League Buttons */}
      <div className="flex overflow-x-auto gap-3 scroll-hide pb-2">
        {leagues.map((league, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full shadow-sm text-sm text-gray-700 flex-shrink-0"
          >
            {league.icon}
            <span>{league.label}</span>
          </button>
        ))}
      </div>

      {/* Scrollable Match Cards */}
      <div className="flex overflow-x-auto gap-4 scroll-hide pb-1">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow-sm space-y-3 flex-shrink-0"
          >
            {/* Header */}
            <div className="text-sm font-semibold">
              <Link to="#" className="hover:underline text-green-700">
                Basketball - {match.league}
              </Link>
            </div>

            {/* Teams and Time */}
            <div className="flex items-center justify-between gap-2">
              {/* Home Team */}
              <div className="flex flex-col items-center text-sm text-gray-800 flex-1 basis-0">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mb-1">🏀</span>
                <span className="text-center">{match.home}</span>
              </div>

              {/* Match Info */}
              <div className="flex flex-col items-center text-xs text-gray-700 flex-1 basis-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{match.time}</span>
                  <span className="w-0.5 h-4 bg-gray-400"></span>
                  <span>{match.day}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-green-700 font-medium">Winner</span>
                  <span className="w-4 h-4 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">!</span>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center text-sm text-gray-800 flex-1 basis-0">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mb-1">🏀</span>
                <span className="text-center">{match.away}</span>
              </div>
            </div>

            {/* Betting Odds */}
            <div className="flex gap-2 text-sm font-medium">
              <button className="bg-green-100 px-3 py-2 rounded-lg flex items-center justify-between gap-2 text-green-700 hover:bg-green-200 flex-1">
                <span>1</span>
                <span>{match.odds.home}</span>
              </button>
              <button className="bg-green-100 px-3 py-2 rounded-lg flex items-center justify-between gap-2 text-green-700 hover:bg-green-200 flex-1">
                <span>2</span>
                <span>{match.odds.away}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Matches;
