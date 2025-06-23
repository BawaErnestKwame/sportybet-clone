import React, { useState } from 'react';
import mtnlogo from '../assets/mtnlogo.jpeg';
import airtel from '../assets/airtel.jpeg';
import telecel from '../assets/telecel.jpeg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Paybill = () => {
  const [openSection, setOpenSection] = useState(null); // 'mtn' | 'airtel' | 'telecel' | null

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* MTN Section */}
      <div className="pb-3">
        <div onClick={() => toggleSection('mtn')} className="flex justify-between items-center cursor-pointer">
          <div className="flex gap-2 text-sm text-gray-800 font-medium">
            <img src={mtnlogo} alt="" className="w-6 h-5" />
            <p>MTN Mobile Money</p>
          </div>
          <span className="flex text-gray-500">
            {openSection === 'mtn' ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 border-b border-gray-400 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            openSection === 'mtn' ? 'max-h-[500px] mt-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-2">
            <p>1. Dial <span className="text-green-600">*711*222#</span> from your SportyBet registered MTN mobile phone.</p>
            <p>2. Provide the amount you wish to deposit.</p>
            <p>3. Wait for a confirmation message from MTN Mobile Money, then validate the transaction by typing your PIN.</p>
            <p>4. Your account will be top up immediately.</p>

            <h1 className="py-4">Please follow the steps below if prompt is not received:</h1>
            <p>1. Dial <span className="text-green-600">*170#</span></p>
            <p>2. Select Option 6; My Wallet</p>
            <p>3. Select Option 3; My Approvals</p>
            <p>4. Enter PIN to view pending approvals and approve or decline payment.</p>
          </div>
        </div>
      </div>

      {/* AirtelTigo Section */}
      <div className="pb-3 mt-2">
        <div onClick={() => toggleSection('airtel')} className="flex justify-between items-center cursor-pointer">
          <div className="flex gap-2 text-sm text-gray-800 font-medium">
            <img src={airtel} alt="" className="w-6 h-5" />
            <p>AirtelTigo</p>
          </div>
          <span className="flex text-gray-500">
            {openSection === 'airtel' ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 border-b border-gray-400 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            openSection === 'airtel' ? 'max-h-[500px] mt-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-2">
            <p>1. Dial <span className="text-green-600">*711*222#</span> from your AirtelTigo mobile phone.</p>
            <p>2. Provide the amount you wish to deposit.</p>
            <p>3. Wait for a confirmation message from AirtelTigo Money, then validate the transaction by typing your PIN.</p>
            <p>4. Your account will be top up immediately.</p>
          </div>
        </div>
      </div>

      {/* Telecel Section */}
      <div className="pb-3 mt-2">
        <div onClick={() => toggleSection('telecel')} className="flex justify-between items-center cursor-pointer">
          <div className="flex gap-2 text-sm text-gray-800 font-medium">
            <img src={telecel} alt="" className="w-6 h-5" />
            <p>Telecel</p>
          </div>
          <span className="flex text-gray-500">
            {openSection === 'telecel' ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </span>
        </div>

        <div
          className={`text-sm text-gray-700 border-b border-gray-400 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            openSection === 'telecel' ? 'max-h-[500px] mt-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-2">
            <p>1. Dial <span className="text-green-600">*711*222#</span> from your Telecel mobile phone.</p>
            <p>2. Provide the amount you wish to deposit.</p>
            <p>3. Wait for a confirmation message from Telecel Money, then validate the transaction by typing your PIN.</p>
            <p>4. Your account will be top up immediately.</p>
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="pt-3 text-xs text-gray-500">
        <p>1. Maximum per transaction is GHS 20,000.00</p>
        <p>2. Minimum per transaction is GHS 1.00</p>
        <p>3. Deposit is free, no transaction fee.</p>
        <p>4. Your balance can only be withdrawn to the mobile number that you registered with.</p>
      </div>
    </>
  );
};

export default Paybill;
