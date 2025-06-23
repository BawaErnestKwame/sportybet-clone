import React, { useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import mtnlogo from '../assets/mtnlogo.jpeg';

const MobileMoney = () => {
  const [amount, setAmount] = useState(0);
  const [touched, setTouched] = useState(false);

  const handleAddAmount = (value) => {
    setAmount(prev => (parseFloat(prev) + value).toFixed(2));
    setTouched(true);
  };

  return (
    <div className='flex flex-col'>
      {/* Phone number display */}
      <div className="flex mb-3.5 justify-between border border-gray-300 rounded-xs py-2 px-3 text-xs text-gray-600 items-center">
        <span className='flex gap-3 items-center'>
          <PhoneAndroidIcon />
          <p>+233 59****218</p>
        </span>
        <span className='flex gap-3 items-center'>
          <p>Switch</p>
          <ArrowForwardIosIcon fontSize='inherit' />
        </span>
      </div>

      {/* Network logo */}
      <div className="flex justify-between mb-3.5 border border-gray-300 rounded-xs py-2 px-3 text-xs text-gray-600 items-center">
        <span className='flex gap-3 items-center'>
          <img src={mtnlogo} alt="MTN" className='w-6 h-4' />
          <p>MTN Mobile Money</p>
        </span>
        <span className='flex gap-3 items-center'>
          <p>Switch</p>
          <ArrowForwardIosIcon className='font-bold' />
        </span>
      </div>

      {/* Balance display */}
      <div className="flex justify-end text-gray-400 mb-3.5 gap-1 text-sm">
        <p>Balance</p>
        <span>(GHS)</span>
        <span>0.00</span>
      </div>

      {/* Amount input */}
      <div className="flex justify-between border border-gray-300 hover:border-green-600 transition-colors mb-2 rounded-xs py-3 px-3 text-xs text-gray-600 items-center">
        <span className='flex gap-2 items-center text-sm'>
          <h1>Amount</h1>
          <span>(GHS)</span>
        </span>
        <input
          type="text"
          value={amount}
          readOnly
          placeholder='min. 1.00'
          className='outline-none text-xs text-right bg-transparent'
        />
      </div>

      {/* Amount buttons (individual handlers) */}
      <div className="flex gap-2 text-sm mb-3">
        <button
          onClick={() => handleAddAmount(2)}
          className='border border-gray-600 py-1 px-5 cursor-pointer'
        >
          +2
        </button>
        <button
          onClick={() => handleAddAmount(5)}
          className='border border-gray-600 py-1 px-4.5 cursor-pointer'
        >
          +5
        </button>
        <button
          onClick={() => handleAddAmount(10)}
          className='border border-gray-600 py-1 px-4.5 cursor-pointer'
        >
          +10
        </button>
        <button
          onClick={() => handleAddAmount(50)}
          className='border border-gray-600 py-1 px-4.5 cursor-pointer'
        >
          +50
        </button>
        <button
          onClick={() => handleAddAmount(100)}
          className='border border-gray-600 py-1 px-4.5 cursor-pointer'
        >
          +100
        </button>
      </div>

      {/* Top Up button */}
      <button
        className={`w-full py-2 rounded text-sm transition-colors ${
          touched ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500'
        }`}
      >
        Top Up Now
      </button>

      {/* Instructions */}
      <div className="pt-3 text-xs text-gray-500">
        <p>1. Maximum per transaction is GHS 20,000.00</p>
        <p>2. Minimum per transaction is GHS 1.00</p>
        <p>3. Deposit is free, no transaction fee.</p>
        <p>4. Your balance can only be withdrawn to the mobile number that you registered with.</p>
        <p>5. Add a backup number to avoid network issues: Deposit <ArrowForwardIosIcon fontSize='inherit' /> Mobile Money <ArrowForwardIosIcon fontSize='inherit' /> Switch.</p>
      </div>
    </div>
  );
};

export default MobileMoney;
