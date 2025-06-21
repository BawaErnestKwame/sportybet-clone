import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LockIcon from '@mui/icons-material/Lock';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import visa from '../assets/visa.jpeg'
import mastercard from '../assets/mastercard.png'

const Card = () => {
  return (
    <>
      <form className="space-y-4 px-4 pt-4">
        {/* Card Number */}
        <div className="flex items-center gap-2 border border-gray-400 rounded py-2 px-3 text-sm hover:border-green-600 transition-colors">
          <CreditCardIcon className="text-gray-500" />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Card Number"
            className="outline-none border-none w-full appearance-none"
          />
        </div>

        {/* Expiry & CVV */}
        <div className="flex items-center justify-between gap-1">
          {/* Expiry */}
          <div className="flex gap-3">
          <div className="flex items-center gap-2 flex-1 border border-gray-400 rounded py-2 px-3 hover:border-green-600 transition-colors">
            <DateRangeIcon className="text-gray-500" />
            <input
              type="text"
              placeholder="MM/YY"
              className="outline-none border-none w-full text-sm"
            />
          </div>

          {/* CVV */}
          <div className="flex items-center gap-2 flex-1 border border-gray-400 rounded py-2 px-3 hover:border-green-600 transition-colors">
            <LockIcon className="text-gray-500" />
            <input
              type="password"
              placeholder="CVV"
              maxLength={4}
              className="outline-none border-none w-full text-sm"
            />
          </div>
          </div>

          {/* Help Icon */}
          <div className="flex items-center text-gray-500 cursor-pointer">
            <HelpOutlineIcon fontSize="inherit" />
          </div>
        </div>

        {/* Styled Checkbox */}
        <div className="flex items-center gap-2 text-sm text-gray-700 pt-2">
          <input
            type="checkbox"
            id="saveCard"
            className="w-4 h-4 text-green-600 rounded focus:ring-green-500 border-gray-300 accent-green-600"
          />
          <label htmlFor="saveCard">Save card</label>
        </div>
      </form>

      
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

      {/* sponsors */}

      <div className="flex items-center justify-center gap-2 py-4">
        <img src={visa} alt="" className='w-6 h-4' />
        <img src={mastercard} alt=" " className='w-6 h-5"' />

      </div>

      {/* transactions instructions */}
      <div className=" pt-3 text-xs text-gray-500">
        <p>1. Maximum per transaction is GHS 20, 000.00</p>
        <p>2. Minimum per transaction is GHS 1.00</p>
        <p>3. Deposit is free, no transaction fee.</p>
        <p>4. Your balance can only withdrawn to the mobile number that you registered with.</p>
        <p>5. Add a backup number to avoid network issues: Deposit <ArrowForwardIosIcon fontSize='inherit'/> Mobile Money< ArrowForwardIosIcon fontSize='inherit'/> Switch. </p>
      </div>
    </>
  );
};

export default Card;
