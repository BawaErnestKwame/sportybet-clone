import logo from './assets/sportybet-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';


const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[375px] w-full h-16 bg-gray-900 border-t border-gray-300 shadow-md flex justify-around items-center z-50 px-4">

      <ul className='flex gap-8'>
        <NavLink>
          <li className="flex flex-col items-center text-xs text-gray-400">
            <img src={logo} alt="" className='w-6 h-6'/>
            Home
          </li>
          </NavLink>


        <NavLink>
          <li className="flex flex-col items-center text-xs text-gray-400">
            <MenuIcon/>
           Az Menu
          </li>
          </NavLink>


        <NavLink>
          <li className="flex flex-col items-center text-xs text-gray-400">
             <SportsEsportsIcon/>
            Games
          </li>
          </NavLink>

        <NavLink>
          <li className="flex flex-col items-center text-xs text-gray-400">
             <CurrencyExchangeIcon/>
            Open Bets
          </li>
          </NavLink>

        <NavLink>
          <li className="flex flex-col items-center text-xs text-gray-400">
            <PersonIcon/>
            Me
          </li>
          </NavLink>

      </ul>

   
 
   
    
  
      <div >
      </div> 
    </nav>
  )
}

export default BottomNavbar
