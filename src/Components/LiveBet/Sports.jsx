import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sports = [
  'Football', 'Basketball', 'Tennis', 'Table Tennis', 'Volleyball',
  'Handball', 'Cricket', 'Badminton', 'Baseball', 'Futsal',
  'eBasketball', 'eFootball', 'Ice Hockey',
];

const Sports = () => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen flex ">
      {/* Header */}
      <div className=" left-0 z-50 sticky">
        <h1 className="text-xl font-bold text-white">All Sports</h1>
      </div>

      {/* Sports Grid */}
      <ul className=" flex  gap-4 overflow-x-auto scroll-hide">
        {sports.map((sport, index) => (
          <li
            key={index}
            className=" transition duration-200 text-sm text-white font-medium py-3 px-4 rounded-xl shadow-sm cursor-pointer"
          >
            {sport}
          </li>
        ))}
      </ul>

      <div className=" flex  right-0 z-50 sticky">
                <ArrowForwardIcon className="text-gray-400" />
      </div>
    </div>
  );
};

export default Sports;
