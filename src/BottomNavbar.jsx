import React from 'react';
import logo from './assets/sportybet-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[375px] w-full h-16 bg-gray-900 border-t border-gray-300 shadow-md flex justify-around items-center z-50 px-4">
      <ul className="flex justify-between w-full">
        <NavLink to="/" className="flex flex-col items-center text-xs text-gray-400 hover:text-white">
          <li className="flex flex-col items-center">
            <img src={logo} alt="Home" className="w-6 h-6" />
            Home
          </li>
        </NavLink>

        <NavLink to="/azmenu" className="flex flex-col items-center text-xs text-gray-400 hover:text-white">
          <li className="flex flex-col items-center">
            <MenuIcon />
            Az Menu
          </li>
        </NavLink>

        <NavLink to="/games" className="flex flex-col items-center text-xs text-gray-400 hover:text-white">
          <li className="flex flex-col items-center">
            <SportsEsportsIcon />
            Games
          </li>
        </NavLink>

        <NavLink to="/open-bet" className="flex flex-col items-center text-xs text-gray-400 hover:text-white">
          <li className="flex flex-col items-center">
            <CurrencyExchangeIcon />
            Open Bets
          </li>
        </NavLink>

        <NavLink to="/me" className="flex flex-col items-center text-xs text-gray-400 hover:text-white">
          <li className="flex flex-col items-center">
            <PersonIcon />
            Me
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
