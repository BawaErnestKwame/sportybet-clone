import React, { useState } from 'react'
import mtnlogo from '../assets/mtnlogo.jpeg'
import airtel from '../assets/airtel.jpeg'
import telecel from '../assets/telecel.jpeg'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Paybill = () => {

  const[open, setOpen] = useState(0)
  return (
    <>
    <div className="border-b border-gray-300 pb-3">
      {/* title text */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-sm text-gray-800 font-medium">
          <img src={mtnlogo} alt=""  className='w-6 h-5'/>
          <p>MTN Mobile Money</p>
        </div>

        <span className='flex text-gray-500'>
          <KeyboardArrowRightIcon />
          <KeyboardArrowDownIcon/>
        </span>

      </div>

      {/* guidance */}
      {/* MTN GUIDANCE */}
      <div className=" text-sm text-gray-700 border-b border-gray-400 hidden">
        <div className="">
          <p>1. Dial <span className='text-green-600'> *711*222#</span> From your SportyBet registered MTN mobile phone.</p>
          <p>2. Provide the amount you wish to deposit.</p>
          <p>3. Wait for a confirmation message from MTN Mobile Money, then validate the transaction by typing your PIN.</p>
          <p>4. Your account will be top up immediately.</p>
        </div>

        <h1 className='py-4'>Please follow the steps below if prompt is not received:</h1>

        <div className="">
          <p>1. Dial <span className='text-green-600'>*170#</span></p>
          <p>2. Select Option 6; My Wallet</p>
          <p>3. Select Option 3; My Approvals</p>
          <p>4. Enter PIN to view pending approvals and approve or decline payment</p>
        </div>

      </div>
    </div>


    <div className="border-b border-gray-300 pb-3 mt-2">
      {/* title text  airteltigo*/}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-sm text-gray-800 font-medium">
          <img src={airtel} alt=""  className='w-6 h-5'/>
          <p>AirtelTigo</p>
        </div>

        <span className='flex text-gray-500'>
          <KeyboardArrowRightIcon />
          <KeyboardArrowDownIcon/>
        </span>

      </div>

      {/* guidance */}
      {/* MTN GUIDANCE */}
      <div className=" text-sm text-gray-700 border-b border-gray-400 hidden">
        <div className="">
          <p>1. Dial <span className='text-green-600'>*711*222# </span>from your AirtelTigo mobile phone.</p>
          <p>2. Provide the amount you wish to deposit.</p>
          <p>3. Wait for a confirmation message from MTN Mobile Money, then validate the transaction by typing your PIN.</p>
          <p>4. Your account will be top up immediately.</p>
        </div>


      </div>
    </div>

    <div className="border-b border-gray-300 pb-3 mt-2">
      {/* title text  telecel*/}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-sm text-gray-800 font-medium">
          <img src={telecel} alt=""  className='w-6 h-5'/>
          <p>Telecel</p>
        </div>

        <span className='flex text-gray-500'>
          <KeyboardArrowRightIcon />
          <KeyboardArrowDownIcon/>
        </span>

      </div>

      {/* guidance */}
      {/* MTN GUIDANCE */}
      <div className=" text-sm text-gray-700 border-b border-gray-400 hidden">
        <div className="">
          <p>1. Dial <span className='text-green-600'> *711*222#</span> From your SportyBet registered MTN mobile phone.</p>
          <p>2. Provide the amount you wish to deposit.</p>
          <p>3. Wait for a confirmation message from MTN Mobile Money, then validate the transaction by typing your PIN.</p>
          <p>4. Your account will be top up immediately.</p>
        </div>

      </div>
    </div>

    <div  className=" pt-3 text-xs text-gray-500">
       <p>1. Maximum per transaction is GHS 20, 000.00</p>
        <p>2. Minimum per transaction is GHS 1.00</p>
        <p>3. Deposit is free, no transaction fee.</p>
        <p>4. Your balance can only withdrawn to the mobile number that you registered with.</p>
    </div>

    </>
  )
}

export default Paybill