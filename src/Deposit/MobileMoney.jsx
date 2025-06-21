import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import mtnlogo from '../assets/mtnlogo.jpeg'

const MobileMoney = () => {
  return (
  <div className='flex flex-col'>
      <div className=" flex mb-3.5 justify-between border border-gray-300 rounded-xs py-2 px-3 text-xs text-gray-600 items-center">
        <span className='flex gap-3 items-center'>
          <PhoneAndroidIcon  />
          <p>+233 59****218</p>
        </span>

        <span className='flex gap-3 items-center'>
          <p>Switch</p>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </span>
      </div>

      <div className=" flex justify-between mb-3.5  border border-gray-300 rounded-xs py-2 px-3 text-xs text-gray-600 items-center">
        <span className='flex gap-3 items-center'>
          <span>
            <img src={mtnlogo} alt="" className='w-6 h-4'/>
          </span>
          <p>MTN Mobile Money</p>
        </span>

        <span className='flex gap-3 items-center'>
          <p>Switch</p>
          <ArrowForwardIosIcon className='font-bold'/>
        </span>
      </div>

      <div className=" flex justify-end text-gray-400 mb-3.5 gap-1 text-sm">
        <p>Balance</p>
        <span>(GHS)</span>
        <span>0.00</span>
      </div>

          <div className=" flex justify-between border border-gray-300 hover:border-green-600 transition-colors mb-2 rounded-xs py-3 px-3 text-xs text-gray-600    items-center">
            <span className='flex gap-2 items-center text-sm '>
              <h1>Amount</h1>
              <span>(GHS)</span>
            </span>

            <input type="text"
             placeholder='min. 1.00'
               className='outline-none text-xs text-right'/>
      </div>

      {/* amount-bottons */}

      <div className="flex gap-2 text-sm mb-3">
        <button className='border border-gray-600 py-1 px-5'>+2</button>
        <button className='border border-gray-600 py-1 px-4.5'>+5</button>
        <button className='border border-gray-600 py-1 px-4.5'>+10</button>
        <button className='border border-gray-600 py-1 px-4.5'>+50</button>
        <button className='border border-gray-600 py-1 px-4.5'>+100</button>
      </div>

      {/* Top Up Now botton */}

      <button className='flex- w-full bg-gray-200 text-gray-500 py-2 rounded text-sm'>Top Up Now</button>

      {/* transactions instructions */}
      <div className=" pt-3 text-xs text-gray-500">
        <p>1. Maximum per transaction is GHS 20, 000.00</p>
        <p>2. Minimum per transaction is GHS 1.00</p>
        <p>3. Deposit is free, no transaction fee.</p>
        <p>4. Your balance can only withdrawn to the mobile number that you registered with.</p>
        <p>5. Add a backup number to avoid network issues: Deposit <ArrowForwardIosIcon fontSize='inherit'/> Mobile Money< ArrowForwardIosIcon fontSize='inherit'/> Switch. </p>
      </div>
        
    </div>
  )
}

export default MobileMoney