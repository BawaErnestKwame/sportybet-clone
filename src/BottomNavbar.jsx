import logo from './assets/sportybet-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';


const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[375px] w-full h-16 bg-gray-900 border-t border-gray-300 shadow-md flex justify-around items-center z-50">
      <div className="flex flex-col items-center text-xs text-gray-50">
        <img src={logo} alt="" className='w-6 h-6'/>
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-50">
       <MenuIcon/>
        <span>Live</span>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-50">
      <SportsEsportsIcon/>
        <span>Virtual</span>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-50">
     <CurrencyExchangeIcon/>
        <span>Open Bet</span>
      </div>
      <div className="flex flex-col items-center text-xs text-gray-50">
       <PersonIcon/>
        <span>Me</span>
      </div>
    </div>
  )
}

export default BottomNavbar
