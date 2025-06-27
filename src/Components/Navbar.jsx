import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import profile from '../assets/image.jpg'

const Navbar = () => {
  return (
    <div className='bg-red-600 fixed top-0 z-50 max-w-[768px] w-full h-17 flex justify-between items-center px-3 py-2'>
      {/* logo */}
      <h1 className='text-white font-bold text-3xl'>Sporty</h1>

      {/* right icons */}
      <div className="flex items-center gap-x-0">
        <SearchIcon className="text-white font-bold" />
        <div className="flex items-center gap-x-2 rounded px-2 py-1">
          {/* profile */}
          <button className='border-none bg-white text-red-600 text-sm rounded px-2 py-1 font-normal'>Deposit</button>
          <button className=' flex items-center gap-1 border-2 border-gray-100 rounded px-1 py-0.5'><img src={profile} alt="profile" className='w-5 h-5 rounded-full border-2 border-gray-100' /> 
          <span className='text-sm text-white font-medium'>GHS 0.00</span>
          </button>
          
          {/* amount */}
         
        </div>
      </div>
    </div>
  )
}

export default Navbar
