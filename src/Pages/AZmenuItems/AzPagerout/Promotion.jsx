import React, { useState, useEffect } from 'react';

import promo1 from '../../../assets/promo1.jpeg';
import promo2 from '../../../assets/promo2.jpeg';
import promo3 from '../../../assets/promo3.jpeg';
import promo4 from '../../../assets/promo4.jpeg';
import promo5 from '../../../assets/promo5.jpeg';
import promo6 from '../../../assets/promo6.jpg';

const Promo = [
  {
    id: 1,
    image: promo1,
   
  },
  {
    id: 2,
    image: promo2,
  },
  {
    id: 3,
    image: promo3,
  
  },
  {
    id: 4,
    image: promo4,

  },
  {
    id: 5,
    image: promo5,
    
  },
  {
    id: 6,
    image: promo6,
   
  },
];

const Promotion = () => {
  const [selected, setSelected] = useState('All');
  const [data, setData] = useState([]);

  const categories = ['All', 'Sports', 'Feature', 'Casino'];

  useEffect(() => {
    setData(Promo); 
  }, []);

  const filteredPromotions =
    selected === 'All'
      ? data
      : data.filter((promo) => promo.category === selected);

  return (
    <div className="min-h-screen w-full text-gray-700 pt-[120px] pb-4 mt-12">
      {/* Tabs */}
      <div className="w-full border-b border-gray-200 mb-4">
        <ul className="flex justify-around px-4 text-base font-medium">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelected(cat)}
              className={`cursor-pointer py-2 px-2 transition duration-150 ${
                selected === cat
                  ? 'text-green-600 border-b-2 border-green-600'
                  : ''
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 px-4">
        {filteredPromotions.length === 0 ? (
          <p className="text-center text-gray-400">No promotions found.</p>
        ) : (
          filteredPromotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-40 object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Promotion;
