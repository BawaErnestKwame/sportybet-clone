import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Live = () => {
  const [selected, setSelected] = useState('Popular');

  const sports = [
    'Popular', 'Football', 'vFootball', 'Basketball', 'Tennis', 'Table Tennis',
    'eFootball', 'eBasketball', 'Ice Hockey', 'Volleyball', 'Handball',
    'Baseball', 'Cricket', 'American Football', 'Darts', 'Badminton', 'Futsal'
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] pt-[170px] overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-36 border-r border-gray-200 overflow-y-hidden">
        <div className="py-4 space-y-1">
          {sports.map((sport, index) => (
            <button
              key={index}
              onClick={() => setSelected(sport)}
              className={`w-full text-left px-4 py-2 text-sm transition-all duration-200
                ${selected === sport 
                  ? ' text-green-600 font-semibold' 
                  : ' text-gray-700'
                }`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 overflow-y-hidden p-4 text-gray-600">
        {/* <h1 className="text-lg font-semibold mb-2">{selected}</h1>
        <p className="text-gray-500 text-sm mb-4">
          Display matches or content for <strong>{selected}</strong> here.
        </p> */}

        <button className='flex text-gray-600 justify-between items-center gap-20 '>
          <span className='flex gap-2 items-center'>
          <span>54</span>
          <p>{selected}</p>
          </span>

          <span className='flex items-center gap-1'>All <ArrowForwardIosIcon fontSize='inherit'/> </span>

        </button>

        {/* Dummy content */}
        <div className="space-y-4 text-gray-600">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="p-4">
              Match {i + 1} - {selected}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
