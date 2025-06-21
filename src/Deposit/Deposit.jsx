import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Deposit = () => {
  const location = useLocation();
  const current = location.pathname;

  return (
    <>
      <div className="px-4 bg-red-600 flex justify-between items-center text-sm text-white font-medium pt-6 pb-3">
        <Link to="/me">
          <div className="flex items-center gap-1">
            <ArrowBackIosIcon fontSize="small" />
            <p>Me</p>
          </div>
        </Link>

        <h1>Deposit</h1>

        <Link to="/howToDeposit">
          <span>
            <HelpOutlineIcon />
          </span>
        </Link>
      </div>

      <div className="px-4 flex justify-between pt-3 text-sm border-b border-gray-100 pb-2">
        <Link
          to="mobile-money"
          className={`text-gray-600 ${
            current.includes('mobile-money')
              ? 'text-gray-900 underline decoration-3 decoration-green-600 underline-offset-8'
              : ''
          }`}
        >
          Mobile Money
        </Link>

        <Link
          to="paybill"
          className={`text-gray-600 ${
            current.includes('paybill')
              ? 'text-gray-900 underline decoration-3 decoration-green-600 underline-offset-8'
              : ''
          }`}
        >
          Paybill
        </Link>

        <Link
          to="card"
          className={`text-gray-600 ${
            current.includes('card')
              ? 'text-gray-900 underline decoration-3 decoration-green-600 underline-offset-8'
              : ''
          }`}
        >
          Card
        </Link>
      </div>

      {/* Renders tab content here */}
      <div className="px-4 py-4">
        <Outlet />
      </div>
    </>
  );
};

export default Deposit;
