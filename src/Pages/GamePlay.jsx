import React, { useState } from 'react';

import profile from '../assets/image.jpg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import StyleIcon from '@mui/icons-material/Style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const dropdownItems = [
  { label: 'Home', 
    icon: <HomeIcon fontSize="small" />, 
    value: 'home' 
  },

  { label: 'My Favourite',
     icon: <FavoriteIcon fontSize="small" />,
     value: 'favourite'
  },

  { label: 'Popular', icon: <LocalFireDepartmentIcon fontSize="small" />, value: 'popular' },
  { label: 'New', icon: <FiberNewIcon fontSize="small" />, value: 'new' },
  { label: 'Crash', icon: <AirplanemodeInactiveIcon fontSize="small" />, value: 'crash' },
  { label: 'Quick', icon: <ElectricBoltIcon fontSize="small" />, value: 'quick' },
  { label: 'Card Games', icon: <StyleIcon fontSize="small" />, value: 'cardgames' },
];

const GamePlay = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dropdownItems[0]);
  const [full, setFull] = useState(false);

  const handleFullWidth = () => {
    setFull(true);
    setDropdownOpen(false);
  };

  const handleClearSearch = () => {
    setFull(false);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-red-600 w-full h-16 flex justify-between items-center px-4 py-3 shadow-md">
        <h1 className="text-white font-extrabold text-xl">
          Sporty <span className="bg-white px-2 py-0.5 rounded-full text-red-600 text-xs font-bold">GAMES</span>
        </h1>
      <div className="flex items-center gap-x-2 rounded px-2 py-1">
               {/* profile */}
             <Link to='/Profile'>
               <button className=' flex items-center gap-1 border-2 border-gray-100 rounded px-1 py-0.5'>
                <img src={profile} alt="profile" className='w-5 h-5 rounded-full border-2 border-gray-100' /> 
               <span className='text-sm text-white font-medium'>GHS 0.00</span>
               </button>
             
             </Link>
               
               {/* amount */}
              
             </div>
      </div>

      {/* Main Section */}
      <div className="px-4 py-4 bg-green-50 min-h-screen w-full">
        <div className="flex items-center justify-between gap-2 mb-4 w-full">
          {/* Search Input */}
          <div className={`flex items-center bg-white border border-gray-200 rounded-xl py-1 px-2 shadow-sm transition-all duration-300 ${full ? 'w-full' : 'w-[55%]'}`}>
            <SearchIcon className="text-gray-500" fontSize="inherit" />
            <input
              onFocus={handleFullWidth}
              type="text"
              placeholder="Search Games"
              className="w-full outline-none px-2 text-gray-600"
            />
            <button
              onClick={handleClearSearch}
              className={`px-2 border-l border-gray-300 ${full ? 'block' : 'hidden'}`}
            >
              <CloseIcon className="text-gray-500" />
            </button>
          </div>

          {/* Dropdown Menu */}
          {!full && (
            <div className="relative w-[45%] transition-all duration-300">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-green-700 border border-gray-300 rounded-xl px-2 py-1 flex items-center justify-between cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2 text-white w-full">
                  {selectedItem.icon}
                  <span>{selectedItem.label}</span>
                </div>
                <ExpandMoreIcon className="text-white" />
              </div>

              {dropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-md">
                  {dropdownItems.map((item) => (
                    <li
                      key={item.value}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-green-800 hover:bg-green-100 cursor-pointer"
                      onClick={() => handleSelect(item)}
                    >
                      {item.icon}
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Placeholder */}
        <div className="text-center text-gray-400 mt-10">
          <p>No games available right now. Check back later!</p>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
