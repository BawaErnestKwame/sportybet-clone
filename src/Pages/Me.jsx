import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaymentIcon from '@mui/icons-material/Payment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SettingsIcon from '@mui/icons-material/Settings';
import profile_icon from '../assets/image.jpg'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { Link } from 'react-router-dom';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const Me = () => {
  return (
    <>

    <div className='pt-6 pb-4 px-4 bg-gray-900 w-full h-auto'>
      <div className=" flex justify-between text-white text-sm">
     <Link to='/profile'><div className=" flex items-center gap-2">
        <img src={profile_icon} alt="" className=' h-5 w-5 rounded-full  border-0' />
        <span className='flex items-center gap-1'>KWAME BAWA 
        <ArrowForwardIosIcon className="text-sm font-bold text-gray-200" fontSize="inherit" />

        </span>
      </div> 
      </Link> 

      {/* settings-icon */}

      <span>
        <SettingsIcon />
      </span>

      </div>

      <div className=" flex justify-between text-sm text-white items-center py-1 mt-8">
        <div className=" flex items-center gap-2 ">
          <RemoveRedEyeIcon />
          <p>Total Balance</p>
        </div>

        <div className="">
               <span className='font-medium'>GHS 0.00</span>
        </div>

   
      </div>

      {/* deposit| withdrawal */}

      <div className=" flex justify-between text-white gap-3 mt-6">
        <button className='bg-green-600 py-1.5 w-full flex gap-2 rounded  justify-center text-sm'> <PaymentIcon/> Deposit</button>
        <button className='bg-green-600 py-1.5 w-full flex gap-2 rounded justify-center text-sm'><CardTravelIcon/> Withdraw </button>
      </div>
    </div>

      {/* Sortybet history|Transactions| Gifts */}
      <div className=" bg-gray-50 py-3 px-4 border-b border-gray-300">
        <div className=" flex justify-between px-4">
          <span className='text-gray-600 text-sm flex flex-col gap-2 items-center text-center'>
            <BookOnlineIcon/>
           <p className='leading-4'> Sporty Bet<br/>
            History</p>
          </span>

          <span className='text-gray-600 text-sm flex flex-col gap-2 items-center text-center'>
            <CurrencyExchangeIcon/>
           <p className='leading-4'> Transactions</p>
          </span>

          <span className='text-gray-600 text-sm flex flex-col gap-2 items-center text-center'>
            <CardGiftcardIcon/>
           <p className='leading-4'>Gift(0)</p>
          </span>


        </div>

      </div>

      <div className=" text-gray-700">
        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <div className=' flex gap-2 items-center text-sm'>
           <span className='relative'>
             <span className='absolute w-2 h-2 rounded-full bg-red-600 top-0 right-0'></span>
            < EmojiEventsIcon/>
           </span>
           
            <span className='flex gap-2'>
              <p>Sporty Loyalty</p>
              <button className='text-xs text-gray-50 bg-red-600 flex text-center justify-center px-0.5' >+12 Rewards</button>
            </span>
            
          </div>
          <span className='flex items-center '>
            <p>🏆</p>
            <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
          </span>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <span className=' flex gap-2 items-center text-sm'>
            < SupportAgentIcon/>
            Customer Service
          </span>
          <span className='flex gap-1 text-sm items-center'>
            Online 24/7
             <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
          </span>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <div className=' flex gap-2 items-center text-sm '>
           <div className='relative'>
           <span className='absolute w-2 h-2 rounded-full bg-red-600 top-0 right-0'></span>
             < NotificationsNoneIcon/>
           </div>
             <p> Notification Center</p>
          </div>
          <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <span className=' flex gap-2 items-center text-sm'>
            < ThumbUpOffAltIcon/>
             <p> Rate Our App</p>
          </span>
          <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <span className=' flex gap-2 items-center text-sm'>
            < HelpOutlineIcon/>
            Sporty Loyalty
          </span>
          <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <span className=' flex gap-2 items-center text-sm'>
            < TipsAndUpdatesIcon />
            How to play
          </span>
          <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
        </div>


        <div className=" flex justify-between px-4 py-2 border-b-[.5px] border-b-gray-100">
          <span className=' flex gap-2 items-center text-sm'>
            < PublishedWithChangesIcon/>
            Update App
          </span>
         <span className='flex items-center tracking-wide '>
          <p className='text-xs text-gray-50 bg-red-600 rounded-2xl flex text-center justify-center px-1.5'>available</p>
           <ArrowForwardIosIcon className='text-sm' fontSize='inherit'/>
         </span>
        </div>
      </div>

      <div className=" bg-gray-200 w-full mt-2 flex justify-between px-4 items-center py-6">
        <div className=" text-gray-400 text-sm flex gap-2">
          <InsertDriveFileIcon/>
          <h1 className='font-bold'>18+</h1>
        </div>

        <p className=' text-sm'>
           ©{ new Date().getFullYear() }. Sporty Clone. All Right Reserved

        </p>


      </div>

    </>
    
  )
}

export default Me