import React, { useState } from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import game1 from '../../assets/game1.png'
import game2 from '../../assets/game2.png'
import game3 from '../../assets/game3.png'

const Game = () => {
  const buttonCount = 9;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClicked = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="flex gap-3 overflow-x-auto scroll-hide py-4 px-4">
        {Array.from({ length: buttonCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleClicked(index)}
            className={`relative flex items-center gap-1 transition-all duration-300 ease-in-out border rounded-full px-3 py-1 bg-white flex-shrink-0
              ${activeIndex === index ? 'border-gray-600 tooltip-active' : 'border-gray-400'}`}
          >
            <AirplanemodeActiveIcon fontSize="small" />
            {activeIndex === index && (
              <p className="text-sm text-gray-700">Crash</p>
            )}
          </button>
        ))}
      </div>

      {/* Tooltip Triangle Style */}
      <style>
        {`
          .tooltip-active::after {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #4b5563; 
          }
        `}
      </style>

<div className="w-full flex gap-2 overflow-x-auto py-1 scroll-hide">
  {[1, 2, 3].map((_, index) => (
    <div
      key={index}
      className="flex-shrink-0 rounded shadow-sm overflow-hidden"
    >
      {/* Image and Button Wrapper */}
      <div className="relative w-28">


        {/* Game Image */}
        <img
          src={game1}
          alt="Game Logo"
          className="w-28 h-28 object-cover"
        />


        {/* Players Online Badge */}
        <div className="absolute top-2 right-1 flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded shadow-sm">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          <span className="text-xs text-green-700 font-medium">
            765 players
          </span>
        </div>



        {/* Game Button (width matches image) */}
        <button className="absolute bottom-0 left-0 w-28 bg-black/80 text-white text-sm py-1 hover:bg-green-700 transition">
          Aviator
        </button>
      </div>
    </div>
  ))}
</div>

</div>
  );
};

export default Game;
