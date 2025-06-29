import React, { useState } from 'react';

const AzSports = () => {
  const [selected, setSelected] = useState('Popular');

  const sports = [
    'Popular', 'Football', 'vFootball', 'Basketball', 'Tennis', 'Table Tennis',
    'eFootball', 'eBasketball', 'Ice Hockey', 'Volleyball', 'Handball',
    'Baseball', 'Cricket', 'American Football', 'Darts', 'Badminton', 'Futsal'
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] pt-[170px] overflow-hidden">
      {/* Left Sidebar - scrollable */}
      <div className="w-36  border-r border-gray-200 overflow-y-auto hide-scrollbar">
        <div className="py-4">
          {sports.map((sport, index) => (
            <button
              key={index}
              onClick={() => setSelected(sport)}
              className={`w-full text-left px-4 py-2 text-sm  transition 
                ${selected === sport ? ' font-bold text-green-600 ' : ''}`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - scrollable */}
      <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
        <h1 className="text-lg font-semibold mb-2">{selected}</h1>
        <p className="text-gray-500 text-sm mb-4">
          Display matches or content for <strong>{selected}</strong> here.
        </p>

        {/* Dummy content for scroll demo */}
        <div className="space-y-4 text-gray-600">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="p-4 ">
              Match {i + 1} - {selected}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AzSports;
